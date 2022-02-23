import React from 'react'
import { View, Text,Image, FlatList, ActivityIndicator} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import {styles} from '../theme/appTheme'
import { usePokemonPaginated } from '../hooks/usePokemonPaginated';
import { PokemonCard } from '../components/PokemonCard';

export const HomeScreen = () => {
    const {top} = useSafeAreaInsets();
    const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
        <Image 
            source={require('../assets/pokebola.png')}
            style={styles.pokebolaBg}
        />
        <View
            style={{alignItems:'center'}}
        >

        <FlatList
            data={simplePokemonList}
            keyExtractor={(pokemon) => pokemon.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={(
                <Text
                    style={{
                        ...styles.title, 
                        ...styles.globalMargin, 
                        top: top + 20,
                        paddingBottom: 10,
                        marginBottom: top + 20
                    }}
                >Pokedex</Text> 
                )}
            renderItem={({item}) => (
              <PokemonCard pokemon={item}/>
            )}

            //infiniteScrool    
            onEndReached= {loadPokemons}
            onEndReachedThreshold={0.4} //40% de la parte del scroll
            ListFooterComponent={(
                <ActivityIndicator 
                style={{height: 100}}
                size={20}
                    color="grey"
                    />
                    )}
            />       
        </View>
    </>
  )
}
