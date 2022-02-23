import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Navigator} from '../navigator/Navigator'
import { SearchScreen } from '../screens/SearchScreen';
import Icon from 'react-native-vector-icons/Ionicons';
const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}
        screenOptions={{
            tabBarActiveTintColor: '#5856D6',
            tabBarLabelStyle: {
                marginBottom: 10
            },
            tabBarStyle : {
                // backgroundColor: 'red',
                position: 'absolute',
                backgroundColor: 'rgba(255,255,255,0.92)',
                borderWidth: 0,
                elevation: 0,
                height: 60
            }

        }}
    >
      <Tab.Screen 
            name="Home" 
            component={Navigator} 
            options= {{
                tabBarLabel: "Listado",
                tabBarIcon: ({color}) => (
                    <Icon color={color} size={25} name="list-outline"/>
                )
            }}
        />
      <Tab.Screen name="SearchScreen" component={SearchScreen}  options= {{
                tabBarLabel: "Busqueda",
                tabBarIcon: ({color}) => (
                    <Icon color={color} size={25} name="search-outline"/>
                )
            }} />
    </Tab.Navigator>
  )
}