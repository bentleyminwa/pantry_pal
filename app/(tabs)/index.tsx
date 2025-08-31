import { themeColors } from '@/theme/colors';
import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function RecipeHomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.overlay} />
        <Image
          source={require('../../assets/images/pantry_pal_header.png')}
          style={styles.headerImage}
        />
        <View style={styles.headerContent}>
          <Text style={styles.headerHeading} numberOfLines={1}>
            Thai Green Curry
          </Text>
          <Text style={{ color: 'white' }}>by Pantry Pal</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
            }}
          >
            <AntDesign name='clockcircleo' size={18} color='white' />
            <Text style={{ color: 'white', fontSize: 14 }}>30 mins</Text>
          </View>
        </View>
      </View>
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
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity as needed
    zIndex: 1,
  },
  headerContainer: {
    position: 'relative',
    width: '100%',
    height: 300,
    overflow: 'hidden',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    zIndex: -1,
  },
  headerContent: {
    position: 'absolute',
    alignItems: 'center',
    gap: 20,
    zIndex: 2,
  },
  headerHeading: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
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
