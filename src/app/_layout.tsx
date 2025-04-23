import { Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from '../context/ThemeContext';
import { PaperProvider } from 'react-native-paper';

const StackLayout = () => {
  return (
      <ThemeProvider>
        <SafeAreaProvider>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName='index'
          >
            <Stack.Screen
              name='index'
              options={{ animation: 'slide_from_left' }}
            />
            <Stack.Screen
              name='Register'
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen
              name='Forgotpass'
              options={{ animation: 'slide_from_right' }}
            />
            <Stack.Screen name='dashboard' />
          </Stack>
        </SafeAreaProvider>
      </ThemeProvider>
  );
};

export default StackLayout;
