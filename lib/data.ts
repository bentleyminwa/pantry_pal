import { Recipe } from '@/types/recipe';

export const data: Recipe[] = [
  {
    id: 1,
    name: 'Grilled Chicken Fajitas',
    description:
      'Sizzling chicken and bell peppers, served with warm flour tortillas.',
    ingredients: [
      {
        name: 'Chicken Breast',
        quantity: '1 lb',
      },
      {
        name: 'Bell Peppers',
        quantity: '2',
      },
      {
        name: 'Onion',
        quantity: '1',
      },
      {
        name: 'Flour Tortillas',
        quantity: '4',
      },
    ],
    instructions: [
      {
        step: 1,
        description: 'Grill chicken and bell peppers for 5-7 minutes per side.',
      },
      {
        step: 2,
        description: 'Slice chicken and bell peppers into strips.',
      },
      {
        step: 3,
        description:
          'Warm flour tortillas by wrapping them in a damp paper towel and microwaving for 20-30 seconds.',
      },
    ],
    cookingTime: '25',
    servings: 4,
    calories: 350,
    image: require('@/assets/images/grilled_chicken.png'),
  },
  {
    id: 2,
    name: 'Baked Salmon with Lemon',
    description:
      'Sizzling chicken and bell peppers, served with warm flour tortillas.',
    ingredients: [
      {
        name: 'Chicken Breast',
        quantity: '1 lb',
      },
      {
        name: 'Bell Peppers',
        quantity: '2',
      },
      {
        name: 'Onion',
        quantity: '1',
      },
      {
        name: 'Flour Tortillas',
        quantity: '4',
      },
    ],
    instructions: [
      {
        step: 1,
        description: 'Grill chicken and bell peppers for 5-7 minutes per side.',
      },
      {
        step: 2,
        description: 'Slice chicken and bell peppers into strips.',
      },
      {
        step: 3,
        description:
          'Warm flour tortillas by wrapping them in a damp paper towel and microwaving for 20-30 seconds.',
      },
    ],
    cookingTime: '25',
    servings: 4,
    calories: 350,
    image: require('@/assets/images/baked_salmon_with_lemon.png'),
  },
  {
    id: 3,
    name: 'Vegetable Stir Fry',
    description:
      'Sizzling chicken and bell peppers, served with warm flour tortillas.',
    ingredients: [
      {
        name: 'Chicken Breast',
        quantity: '1 lb',
      },
      {
        name: 'Bell Peppers',
        quantity: '2',
      },
      {
        name: 'Onion',
        quantity: '1',
      },
      {
        name: 'Flour Tortillas',
        quantity: '4',
      },
    ],
    instructions: [
      {
        step: 1,
        description: 'Grill chicken and bell peppers for 5-7 minutes per side.',
      },
      {
        step: 2,
        description: 'Slice chicken and bell peppers into strips.',
      },
      {
        step: 3,
        description:
          'Warm flour tortillas by wrapping them in a damp paper towel and microwaving for 20-30 seconds.',
      },
    ],
    cookingTime: '25',
    servings: 4,
    calories: 350,
    image: require('@/assets/images/veg_stir_fry.png'),
  },
  {
    id: 4,
    name: 'Grilled Chicken Fajitas',
    description:
      'Sizzling chicken and bell peppers, served with warm flour tortillas.',
    ingredients: [
      {
        name: 'Chicken Breast',
        quantity: '1 lb',
      },
      {
        name: 'Bell Peppers',
        quantity: '2',
      },
      {
        name: 'Onion',
        quantity: '1',
      },
      {
        name: 'Flour Tortillas',
        quantity: '4',
      },
    ],
    instructions: [
      {
        step: 1,
        description: 'Grill chicken and bell peppers for 5-7 minutes per side.',
      },
      {
        step: 2,
        description: 'Slice chicken and bell peppers into strips.',
      },
      {
        step: 3,
        description:
          'Warm flour tortillas by wrapping them in a damp paper towel and microwaving for 20-30 seconds.',
      },
    ],
    cookingTime: '25',
    servings: 4,
    calories: 350,
    image: require('@/assets/images/grilled_chicken.png'),
  },
];
