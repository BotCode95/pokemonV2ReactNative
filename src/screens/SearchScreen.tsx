import React from 'react'
import { View, Text, ActivityIndicator, ImageStyle, StyleSheet, FlatList, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';
import { useState, useEffect } from 'react';
import { SimplePokemon } from '../interfaces/pokemonInterfaces';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const {top} = useSafeAreaInsets();
    const {isFetching,simplePokemonList} = usePokemonSearch();
    const [term, setTerm] = useState('')
    const [pokeFiltered, setPokeFiltered] = useState<SimplePokemon[]>([])

    useEffect(() => {
       if (term.length === 0) {
           return setPokeFiltered([])
       }

       if(isNaN(Number(term)) ) {
            setPokeFiltered(simplePokemonList.filter(poke => poke.name.toLowerCase().includes(term.toLowerCase())))
        } else {
            const pokemonById =simplePokemonList.find(poke => poke.id === term) 
            setPokeFiltered((pokemonById) ? [pokemonById] : [] )
        }
    }, [term])
    

    if(isFetching) {
        return (
            <Loading/>
        )
    }
  return (
    <View style={{flex:1, marginHorizontal: 20}}>
        <SearchInput
            onDebounce={setTerm}
            style={{
                position: 'absolute',
                zIndex: 999,
                width: screenWidth - 40,
                top: (Platform.OS === 'ios')  ? top : top + 10
            }}
        />
        <FlatList
            data={pokeFiltered}
            keyExtractor={(pokemon) => pokemon.id}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            ListHeaderComponent={(
                <Text
                    style={{
                        ...styles.title, 
                        ...styles.globalMargin, 
                        paddingBottom: 10,
                        marginTop: top + 60
                    }}
                >{term}</Text> 
                )}
            renderItem={({item}) => (
              <PokemonCard pokemon={item}/>
            )}
            />     
    </View>
  )
}


