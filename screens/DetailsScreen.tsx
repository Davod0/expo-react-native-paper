import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Surface } from 'react-native-paper';
import { pokemons } from '../data';
import { RootStackParamList } from '../navigators/RootStackNavigator';


type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen(props: Props) {


  const pokemon = pokemons.find(pokemon => pokemon.name === props.route.params.name);
  if(!pokemon) return null;

  return (
    <View style={styles.container}>
      <Text style={{paddingBottom:20, fontSize:40}}>Details Screen</Text>
      <Surface>
        <Text style={styles.text}>Pokemon name: {pokemon.name}</Text>
        <Text style={styles.text}>Pokemon type: {pokemon.type}</Text>
        <Text style={styles.text}>Pokemon rarity: {pokemon.rarity}</Text>
      </Surface>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 25,
  }
});
