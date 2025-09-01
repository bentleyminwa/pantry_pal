interface Ingredient {
  name: string;
  quantity: string;
}

interface Instruction {
  step: number;
  description: string;
}

export interface Recipe {
  id: number;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: Instruction[];
  cookingTime: string;
  servings: number;
  calories: number;
  image: string;
}
