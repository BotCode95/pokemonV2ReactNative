import React, { useEffect } from 'react'
import { View, Text, StyleSheet, TextInput, ViewStyle, StyleProp } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';
import { useDebouncedValue } from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value: string) => void
    style?: StyleProp<ViewStyle>

}
export const SearchInput = ({style, onDebounce}: Props) => {

    const [textValue, setTextValue] = useState('');
    const debouncedValue = useDebouncedValue(textValue);

    useEffect(() => {
        // console.log({debouncedValue})
        onDebounce(debouncedValue);
    }, [debouncedValue])
    
  return (
    <View style={{
        ...styles.container,
        ...style as any
    }}>
        <View style={styles.textBackground}>
            <TextInput 
                placeholder="Buscar pokemon"
                style={styles.textInput}
                autoCapitalize="none"
                autoCorrect={false}
                value={textValue}
                onChangeText={setTextValue}
            />
            <Icon
                name="search-outline"
                color="grey"
                size={30}
            />
        </View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red'
    },
    textBackground: {
        backgroundColor: '#f3f1f3',
        borderRadius: 50,
        height: 40,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
        
    },
    textInput: {
        flex:1,
        fontSize: 18
    }
})
