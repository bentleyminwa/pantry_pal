import { HeaderContainer } from '@/components/RecipeHomeScreen/header-container';
import { RecipeItem } from '@/components/RecipeHomeScreen/recipe-item';
import { SearchBox } from '@/components/Shared/search-box';
import { data, recipeCategories } from '@/lib/data';
import { themeColors } from '@/theme/colors';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function RecipeHomeScreen() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <HeaderContainer />
      <View style={{ flex: 1, position: 'relative', paddingHorizontal: 10 }}>
        <SearchBox />

        <View style={styles.suggestedRecipeHeader}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            It&#39;s dinner time
          </Text>
          <FontAwesome6 name='utensils' size={20} color='black' />
        </View>

        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <RecipeItem recipe={item} width={150} height={150} />
            )}
            showsHorizontalScrollIndicator={false}
            horizontal
            contentContainerStyle={{
              marginVertical: 20,
              gap: 20,
            }}
          />

          {/* categories */}
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 30 }}>
            <View
              style={{
                borderRadius: 6,
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                padding: 10,
                width: 44,
              }}
            >
              <FontAwesome6 name='filter' size={24} color={themeColors.icon} />
            </View>
            <FlatList
              data={recipeCategories}
              keyExtractor={(index) => index.toString()}
              renderItem={({ item }) => (
                <Text style={{ color: themeColors.icon }}>{item}</Text>
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                gap: 10,
              }}
            />
          </View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <RecipeItem recipe={item} width={'100%'} height={200} />
            )}
            numColumns={2}
            contentContainerStyle={{
              marginVertical: 20,
              gap: 20,
            }}
          />
        </View>
      </View>
    </ScrollView>
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
