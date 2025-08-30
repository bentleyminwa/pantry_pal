import { themeColors } from '@/theme/colors';
import { StyleSheet, Text, View } from 'react-native';

export default function RecipeHomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home of Recipes</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: themeColors.bg,
  },
});
