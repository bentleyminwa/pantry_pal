import { HeaderContainer } from '@/components/RecipeHomeScreen/header-container';
import { themeColors } from '@/theme/colors';
import AntDesign from '@expo/vector-icons/AntDesign';

import { StyleSheet, TextInput, View } from 'react-native';

export default function RecipeHomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <View style={{ position: 'relative' }}>
        <View style={styles.searchBox}>
          <AntDesign
            name='search1'
            size={24}
            color='black'
            style={{ paddingVertical: 10 }}
          />
          <TextInput
            placeholder='Search for recipes...'
            style={styles.searchInput}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
  searchBox: {
    position: 'absolute',
    alignSelf: 'center',
    top: -25,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 30,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    gap: 10,
    zIndex: 5,
  },
  searchInput: {
    width: '100%',
    paddingVertical: 10,
  },
});
