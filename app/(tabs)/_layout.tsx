import { themeColors } from '@/theme/colors';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: themeColors.bg,
        },
        tabBarActiveTintColor: themeColors.accent,
        tabBarInactiveTintColor: themeColors.icon,
        tabBarIconStyle: {
          marginVertical: 4,
        },
      }}
    >
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Recipes',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name='food-turkey'
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name='pantry'
        options={{
          title: 'Pantry',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='fridge' size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='cart'
        options={{
          title: 'Cart',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name='cart' size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name='profile'
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name='user-alt' size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
