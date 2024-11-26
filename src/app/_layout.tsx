import { Stack } from 'expo-router'
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const StackLayout = () => {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <Stack 
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName='index'
        
        >
          <Stack.Screen name='index'
          options={{
            animation: 'slide_from_left'
          }}/>
          <Stack.Screen name='Register'
          options={{
            animation: 'slide_from_right'
          }}
          />
          <Stack.Screen name='Forgotpass'
          options={{
            animation: 'slide_from_right'
          }}
          />
          <Stack.Screen name='dashboard'/>
        </Stack>
      </SafeAreaProvider>
    </PaperProvider>
  );

};

export default StackLayout;