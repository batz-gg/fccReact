import React from 'react';
import { AISuggestion } from '../types';
import { XIcon, SparklesIcon } from './Icons';

interface RecommendationModalProps {
  isOpen: boolean;
  onClose: () => void;
  suggestions: AISuggestion[];
}

const RecommendationModal: React.FC<RecommendationModalProps> = ({ isOpen, onClose, suggestions }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col animate-[scaleIn_0.2s_ease-out]">
        
        <div className="bg-indigo-600 p-6 text-white flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <SparklesIcon className="w-6 h-6 text-indigo-200" />
              Тогоочийн зөвлөгөө
            </h2>
            <p className="text-indigo-100 mt-1">Таны сагсанд буй бүтээгдэхүүнд суурилсан жорууд.</p>
          </div>
          <button onClick={onClose} className="text-indigo-200 hover:text-white hover:bg-white/20 p-2 rounded-full transition-colors">
            <XIcon className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-6 bg-slate-50">
          {suggestions.map((suggestion, idx) => (
            <div key={idx} className="bg-white p-5 rounded-xl shadow-sm border border-slate-100">
              <h3 className="text-lg font-bold text-slate-800 mb-2">{suggestion.recipeName}</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">{suggestion.description}</p>
              
              {suggestion.missingIngredients.length > 0 && (
                <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-800 block mb-2">Танд хэрэг болж магадгүй:</span>
                  <div className="flex flex-wrap gap-2">
                    {suggestion.missingIngredients.map((ing, i) => (
                      <span key={i} className="px-2 py-1 bg-white text-amber-900 text-sm rounded-md border border-amber-100 shadow-sm">
                        + {ing}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="p-4 border-t border-slate-100 bg-white text-center">
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800 font-medium text-sm">
            Хаах
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecommendationModal;