import React from 'react'
import { Tabs } from 'expo-router'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const TabsLayout = () => {
  return (
     <Tabs
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: '#fff',
            tabBarActiveBackgroundColor: '#4facfe',
            tabBarLabelStyle: {
                fontSize: 12
            },
            tabBarStyle:{
                height: 60
            },            
        }} 
     >
        <Tabs.Screen name='index'
            options={{
                title: 'Home',  
                tabBarIcon: ({ focused }) => <MaterialCommunityIcons name={focused ? 'home': 'home-outline'} size={24} color='black' />
            }}
        />
        <Tabs.Screen name='calendar'
            options={{
                title: 'Calendar',
                tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'calendar-month': 'calendar-month-outline'} size={24} color='black' />
            }}
        />
        <Tabs.Screen name='profile'
            options={{
                title: 'Profile',
                tabBarIcon: ({focused}) => <MaterialCommunityIcons name={focused ? 'account': 'account-outline'} size={24} color='black' />
            }}
        />
     </Tabs>
  )
}

export default TabsLayout