import AntDesign from '@expo/vector-icons/AntDesign';
import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

export function HeaderContainer() {
  return (
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
  );
}

const styles = StyleSheet.create({
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
});
