import { HeaderContainer } from '@/components/RecipeHomeScreen/header-container';
import { RecipeItem } from '@/components/RecipeHomeScreen/recipe-item';
import { SearchBox } from '@/components/Shared/search-box';
import { data } from '@/lib/data';
import { themeColors } from '@/theme/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FlatList, StyleSheet, Text, View } from 'react-native';

export default function RecipeHomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <View style={{ flex: 1, position: 'relative', paddingHorizontal: 10 }}>
        <SearchBox />

        <View style={styles.suggestedRecipeHeader}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            It&#39;s dinner time
          </Text>
          <FontAwesome6 name='utensils' size={20} color='black' />
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <RecipeItem recipe={item} />}
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{ marginVertical: 20, gap: 20 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  suggestedRecipeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 50,
  },
});
