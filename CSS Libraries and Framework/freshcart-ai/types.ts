export interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AISuggestion {
  recipeName: string;
  description: string;
  missingIngredients: string[];
}

export interface AISuggestionResponse {
  suggestions: AISuggestion[];
}
