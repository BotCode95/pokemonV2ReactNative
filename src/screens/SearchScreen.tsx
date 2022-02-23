import React from 'react'
import { View, Text, ActivityIndicator, ImageStyle, StyleSheet, FlatList, Dimensions, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Loading } from '../components/Loading';
import { PokemonCard } from '../components/PokemonCard';
import { SearchInput } from '../components/SearchInput';
import { usePokemonSearch } from '../hooks/usePokemonSearch';
import { styles } from '../theme/appTheme';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {

    const {top} = useSafeAreaInsets();
    const {isFetching,simplePokemonList} = usePokemonSearch();

    if(isFetching) {
        return (
            <Loading/>

        )
    }
  return (
    <View style={{flex:1, marginHorizontal: 20}}>
        <SearchInput
            style={{
                position: 'absolute',
                width: screenWidth - 40,
                top: (Platform.OS === 'ios')  ? top : top + 10
            }}
        />
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
                        paddingBottom: 10,
                        marginTop: top + 60
                    }}
                >Pokedex</Text> 
                )}
            renderItem={({item}) => (
              <PokemonCard pokemon={item}/>
            )}
            />     
    </View>
  )
}


