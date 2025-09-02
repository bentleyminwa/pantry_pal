import { Recipe } from '@/types/recipe';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

interface RecipeItemProps {
  recipe: Recipe;
  width?: number | '100%';
  height?: number | '100%';
}

export function RecipeItem({ recipe, width, height }: RecipeItemProps) {
  console.log('Rendering image url:', recipe.image);

  return (
    <View style={{ width }}>
      <Image
        source={recipe.image}
        style={[styles.recipeImage, { width, height }]}
      />
      <Text style={styles.recipeName}>{recipe.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  recipeImage: {
    resizeMode: 'cover',
    borderRadius: 10,
  },
  recipeName: {
    marginTop: 10,
  },
});
