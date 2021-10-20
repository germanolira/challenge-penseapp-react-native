import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListProducts from '../components/ListProducts';
import Dashboard from '../screens/Dashboard';
import { useTheme } from 'styled-components';
import { Platform } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.principal,
        tabBarInactiveTintColor: theme.colors.primary,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: Platform.OS === 'ios' ? 88 : 70,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        }
      }}
    >
      <Screen
        name="Loja"
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="store"
              size={size}
              color={color}
            />
          )
        }}
      />
      <Screen
        name="Cadastrar"
        component={ListProducts}
        options={{
          tabBarIcon: (({ size, color }) =>
            <MaterialIcons
              name="description"
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  )
}