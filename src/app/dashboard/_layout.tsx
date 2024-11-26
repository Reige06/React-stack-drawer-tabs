import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function DrawerLayout() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer
            screenOptions={{
                headerShown: true,
            }}
        >
            <Drawer.Screen
                name="(tabs)"
                options={{
                    drawerLabel: 'Home',
                    title: 'Home',
                    drawerIcon: ({ focused}) => <MaterialCommunityIcons name={focused ? 'home' : 'home-outline'} size={25} />,
                }}
            />
            <Drawer.Screen
                name="settings" // This is the name of the page and must match the url from root
                options={{
                    drawerLabel: 'Settings',
                    title: 'Settings',
                    drawerIcon: ({ focused }) => <MaterialCommunityIcons name={focused ? 'cog' : 'cog-outline' } size={25} />,
                }}
            />
        </Drawer>
    </GestureHandlerRootView>
  );

}