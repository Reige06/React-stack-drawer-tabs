import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';
import { useTheme } from 'react-native-paper';

export default function DrawerLayout() {
  const { toggleTheme, isDark } = useThemeContext();
  const { colors } = useTheme();

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{
          headerShown: true,
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: colors.onPrimary,
          drawerContentStyle:{
            backgroundColor: colors.background,
          },
          drawerActiveBackgroundColor: colors.secondaryContainer,
          drawerInactiveTintColor: colors.onSurfaceVariant,
          drawerActiveTintColor: colors.onSecondaryContainer,
          headerRight: () => (
            <TouchableOpacity onPress={toggleTheme} style={{ marginRight: 16 }}>
              <MaterialCommunityIcons
                name={isDark ? 'weather-sunny' : 'weather-night'}
                size={24}
                color={colors.onPrimary}
              />
            </TouchableOpacity>
          ),
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            drawerLabel: 'Home',
            title: 'Home',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                size={25}
                color={focused ? colors.primary : colors.onSurface}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="settings"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings',
            drawerIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'cog' : 'cog-outline'}
                size={25}
                color={focused ? colors.primary : colors.onSurface}
              />
            ),
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
