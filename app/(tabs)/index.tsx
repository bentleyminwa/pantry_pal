import { HeaderContainer } from '@/components/RecipeHomeScreen/header-container';
import { SearchBox } from '@/components/Shared/search-box';
import { themeColors } from '@/theme/colors';

import { StyleSheet, View } from 'react-native';

export default function RecipeHomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderContainer />
      <View style={{ position: 'relative' }}>
        <SearchBox />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: themeColors.bg,
  },
});
