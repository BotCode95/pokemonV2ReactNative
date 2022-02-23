import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PokemonScreen } from "../screens/PokemonScreen";
import { SearchScreen } from "../screens/SearchScreen";
import { RootStackParams } from "./Navigator";

const Tab2 = createNativeStackNavigator<RootStackParams>()

export const TabSearch = () => {
    return (
      <Tab2.Navigator 
          screenOptions={{
              headerShown: false,
              headerStyle: {
                  backgroundColor: 'white'
              }
          }}
      >
        <Tab2.Screen name="HomeScreen" component={SearchScreen} />
        <Tab2.Screen name="PokemonScreen" component={PokemonScreen} />
      </Tab2.Navigator>
    );
  }