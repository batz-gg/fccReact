import React, { useState, useEffect } from 'react';
import { PRODUCTS } from './constants';
import { Product, CartItem, AISuggestion } from './types';
import ProductCard from './components/ProductCard';
import CartDrawer from './components/CartDrawer';
import RecommendationModal from './components/RecommendationModal';
import { ShoppingCartIcon } from './components/Icons';
import { getCartSuggestions } from './services/geminiService';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<AISuggestion[]>([]);
  const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(false);
  const [isGeneratingAI, setIsGeneratingAI] = useState(false);

  // Persist cart to local storage
  useEffect(() => {
    const savedCart = localStorage.getItem('freshcart_items');
    if (savedCart) {
      try {
        setCart(JSON.parse(savedCart));
      } catch (e) {
        console.error("Error parsing cart", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('freshcart_items', JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: Math.max(1, item.quantity + delta) };
        }
        return item;
      })
    );
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    if(cart.length === 0) return;
    alert("Төлбөр төлөх хэсэг рүү шилжиж байна! Нийт бараа: " + cart.reduce((a,b) => a + b.quantity, 0));
  };

  const handleGenerateIdeas = async () => {
    setIsGeneratingAI(true);
    try {
      const result = await getCartSuggestions(cart);
      if (result && result.suggestions) {
        setAiSuggestions(result.suggestions);
        setIsRecommendationsOpen(true);
        // Close cart to show modal clearly, or keep it open? Let's keep cart open behind or close it.
        // Ideally, modal overlays everything.
      }
    } catch (error) {
      console.error(error);
      alert("Одоогоор зөвлөгөө өгөх боломжгүй байна.");
    } finally {
      setIsGeneratingAI(false);
    }
  };

  const cartItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">F</div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800">FreshCart</h1>
          </div>
          
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2 hover:bg-slate-100 rounded-full transition-colors group"
          >
            <ShoppingCartIcon className="w-6 h-6 text-slate-600 group-hover:text-emerald-600 transition-colors" />
            {cartItemCount > 0 && (
              <span className="absolute top-0 right-0 bg-emerald-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full ring-2 ring-white transform scale-100 transition-transform">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-10 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Органик & Шинэ</h2>
          <p className="text-lg text-slate-500">
            Өдөр бүр шилж сонгосон дээд зэргийн чанар. Сагсаа дүүргээд хиймэл оюун ухаант тогоочоос хоолны санаа аваарай.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </main>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
        onGenerateIdeas={handleGenerateIdeas}
        isGeneratingAI={isGeneratingAI}
      />

      {/* AI Recommendations Modal */}
      <RecommendationModal
        isOpen={isRecommendationsOpen}
        onClose={() => setIsRecommendationsOpen(false)}
        suggestions={aiSuggestions}
      />

    </div>
  );
};

export default App;