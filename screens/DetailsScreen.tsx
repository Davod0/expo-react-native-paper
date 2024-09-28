import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Surface, Text } from 'react-native-paper';
import { pokemons } from '../data';
import { RootStackParamList } from '../navigators/RootStackNavigator';


type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen(props: Props) {

  const pokemon = pokemons.find(pokemon => pokemon.name === props.route.params.name);
  if(!pokemon) return null;

  return (
    <ScrollView style={styles.container}>
      <Text style={{paddingBottom:20, fontSize:40}}>Details Screen</Text>
      <Surface>
        <Text style={styles.text}>Pokemon name: {pokemon.name}</Text>
        <Text style={styles.text}>Pokemon type: {pokemon.type}</Text>
        <Text style={styles.text}>Pokemon rarity: {pokemon.rarity}</Text>
      </Surface>  
      <Button mode="contained">Fight</Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  text:{
    fontSize: 25,
  }
});
