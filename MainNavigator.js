import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import WelcomeScreen from './WelcomeScreen';
import YouTubeScreen from './YouTubeScreen';
import VimeoScreen from './VimeoScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, size }) => {
          let iconSource;

          if (route.name === 'YouTube') {
            iconSource = require('./assets/youtube-icon.png');
          } else if (route.name === 'Vimeo') {
            iconSource = require('./assets/vimeo-icon.png');
          }

          return (
            <Image
              source={iconSource}
              style={{
                width: size,
                height: size,
                opacity: focused ? 1 : 0.6,
              }}
              resizeMode="contain"
            />
          );
        },
        tabBarActiveTintColor: '#000',
        tabBarInactiveTintColor: '#888',
      })}
    >
      <Tab.Screen name="YouTube" component={YouTubeScreen} />
      <Tab.Screen name="Vimeo" component={VimeoScreen} />
    </Tab.Navigator>
  );
}

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={TabRoutes} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
