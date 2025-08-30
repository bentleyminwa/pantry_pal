import { Tabs } from 'expo-router';
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          headerShown: false,
          title: 'Recipes',
        }}
      />
      <Tabs.Screen name='pantry' options={{ title: 'Pantry' }} />
      <Tabs.Screen name='cart' options={{ title: 'Cart' }} />
      <Tabs.Screen name='profile' options={{ title: 'Profile' }} />
    </Tabs>
  );
}
