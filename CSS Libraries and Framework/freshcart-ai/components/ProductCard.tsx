import React from 'react';
import { Product } from '../types';
import { PlusIcon } from './Icons';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:border-emerald-100 transition-all duration-300 flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-md text-xs font-medium text-emerald-800">
          {product.category}
        </div>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-bold text-slate-800 leading-tight">{product.name}</h3>
          <span className="text-lg font-semibold text-emerald-600">${product.price.toFixed(2)}</span>
        </div>
        <p className="text-sm text-slate-500 mb-4 flex-grow">{product.description}</p>
        <button
          onClick={() => onAddToCart(product)}
          className="w-full bg-slate-900 text-white py-2.5 rounded-xl font-medium flex items-center justify-center gap-2 hover:bg-emerald-600 active:scale-95 transition-all"
        >
          <PlusIcon className="w-4 h-4" />
          Сагсанд хийх
        </button>
      </div>
    </div>
  );
};

export default ProductCard;