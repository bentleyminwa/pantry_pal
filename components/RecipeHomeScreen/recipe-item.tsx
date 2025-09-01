import { Recipe } from '@/types/recipe';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

interface RecipeItemProps {
  recipe: Recipe;
}

export function RecipeItem({ recipe }: RecipeItemProps) {
  console.log('Rendering image url:', recipe.image);

  return (
    <View style={styles.recipeItemContainer}>
      <Image source={recipe.image} style={styles.recipeImage} />
      <Text style={styles.recipeName}>{recipe.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeItemContainer: {
    width: 150,
  },
  recipeImage: {
    width: 150,
    height: 150,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  recipeName: {
    marginTop: 10,
  },
});
