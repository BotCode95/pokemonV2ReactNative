import React from 'react'
import {Text, Image} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/Ionicons'
import {styles} from '../theme/appTheme'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
export const HomeScreen = () => {
    const {top} = useSafeAreaInsets();
    const {simplePokemonList} = usePokemonPaginated();
    console.log(simplePokemonList)

  return (
    <>
        <Image 
            source={require('../assets/pokebola.png')}
            style={styles.pokebolaBg}
        />
        <Text
            style={{
                ...styles.title, 
                ...styles.globalMargin, 
                top: top + 20 
            }}
        >Pokedex</Text>
    </>
  )
}
