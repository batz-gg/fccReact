import React from 'react';
import { CartItem } from '../types';
import { XIcon, PlusIcon, MinusIcon, TrashIcon, SparklesIcon } from './Icons';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (id: number, delta: number) => void;
  onRemove: (id: number) => void;
  onCheckout: () => void;
  onGenerateIdeas: () => void;
  isGeneratingAI: boolean;
}

const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemove,
  onCheckout,
  onGenerateIdeas,
  isGeneratingAI
}) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-white">
          <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
            Таны сагс <span className="bg-emerald-100 text-emerald-800 text-sm py-0.5 px-2 rounded-full">{cart.length}</span>
          </h2>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
            <XIcon className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-4">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
                <PlusIcon className="w-8 h-8 text-slate-400" />
              </div>
              <p className="text-slate-500 text-lg">Таны сагс хоосон байна.</p>
              <p className="text-slate-400 text-sm">Шинэ бүтээгдэхүүн нэмж эхлээрэй!</p>
              <button onClick={onClose} className="mt-6 text-emerald-600 font-medium hover:underline">
                Худалдан авалтаа үргэлжлүүлэх
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.id} className="flex gap-4">
                <div className="w-20 h-20 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h4 className="font-medium text-slate-800">{item.name}</h4>
                    <button onClick={() => onRemove(item.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                      <TrashIcon className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-sm text-slate-500">${item.price.toFixed(2)}</p>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center bg-slate-50 border border-slate-200 rounded-lg">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="p-1 hover:bg-white rounded-md transition-colors m-0.5"
                        disabled={item.quantity <= 1}
                      >
                        <MinusIcon className="w-3 h-3 text-slate-600" />
                      </button>
                      <span className="text-sm font-medium w-8 text-center text-slate-800">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="p-1 hover:bg-white rounded-md transition-colors m-0.5"
                      >
                        <PlusIcon className="w-3 h-3 text-slate-600" />
                      </button>
                    </div>
                    <span className="font-semibold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-slate-100 p-5 bg-slate-50/50 backdrop-blur-sm space-y-4">
            
            {/* AI Trigger */}
             <button
              onClick={onGenerateIdeas}
              disabled={isGeneratingAI}
              className="w-full py-3 bg-indigo-50 border border-indigo-100 rounded-xl flex items-center justify-center gap-2 text-indigo-700 font-medium hover:bg-indigo-100 transition-all"
            >
              {isGeneratingAI ? (
                <span className="animate-pulse">Бодож байна...</span>
              ) : (
                <>
                  <SparklesIcon className="w-5 h-5" />
                  Тогоочийн зөвлөгөө авах
                </>
              )}
            </button>

            <div className="space-y-2">
              <div className="flex justify-between text-slate-500">
                <span>Дэд дүн</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Татвар (Тооцоолсон)</span>
                <span>${(total * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold text-slate-900 pt-2 border-t border-slate-200">
                <span>Нийт</span>
                <span>${(total * 1.08).toFixed(2)}</span>
              </div>
            </div>
            <button
              onClick={onCheckout}
              className="w-full py-3.5 bg-emerald-600 text-white rounded-xl font-bold text-lg shadow-lg shadow-emerald-200 hover:bg-emerald-700 hover:shadow-emerald-300 transition-all active:scale-[0.99]"
            >
              Төлбөр төлөх
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;