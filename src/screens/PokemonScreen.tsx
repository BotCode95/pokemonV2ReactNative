
import React from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { RootStackParams } from '../navigator/Navigator'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { FadeInImage } from '../components/FadeInImage';
import { usePokemon } from '../hooks/usePokemon';

interface Props extends NativeStackScreenProps<RootStackParams, 'PokemonScreen'>{};
export const PokemonScreen = ({navigation, route}: Props) => {

  const {simplePokemon, color} = route.params;
  const {id, name, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();

  const { pokemonFull, isLoading} = usePokemon(id);
  return (
    <View style={{flex:1}}>
      <View style={{
          ...styles.headerContainer,
          backgroundColor: color
      }}>
        {/* TODO: Refactorizar Component BackButton  */}  
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.pop()}
          style={{
            ...styles.backButton,
            top: top + 5
          }}
        >
          <Icon
            name="arrow-back-outline"
            color="white"
            size={35}
          />
        </TouchableOpacity>
        <Text
          style={{...styles.pokemonName, top: top + 40}}>{name + '\n'} #{id}
        </Text>
        <Image
            source={require('../assets/pokebola-blanca.png')}
            style={styles.pokebola}
        />
        <FadeInImage 
            uri={picture}   
            style={styles.pokemonImage}     
        />
      </View>
      <View style={styles.loadingIndicator}>
        <ActivityIndicator 
          color={color} 
          size={50}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    height: 370, 
    zIndex: 999,
    alignItems: 'center',
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius:1000
    
  },
  backButton:{
    position: 'absolute',
    left: 20

  },
  pokemonName: {
    color: 'white',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20
  },
  pokebola: {
    width: 250,
    height: 250,
    bottom: -20,
    opacity: 0.7

  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    bottom: -20
  },
  loadingIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
})