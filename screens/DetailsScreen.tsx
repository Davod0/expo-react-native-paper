import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import { pokemons } from '../data';
import { RootStackParamList } from '../navigators/RootStackNavigator';


type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

export default function DetailsScreen(props: Props) {

  const pokemon = pokemons.find(pokemon => pokemon.name === props.route.params.name);
  if(!pokemon) return null;

  return (
    <View style={styles.container}>
      <Text style={{paddingBottom:20, fontSize:40}}>Details Screen</Text>
      <Text style={styles.text}>Pokemon name: {pokemon.name}</Text>
      <Text style={styles.text}>Pokemon type: {pokemon.type}</Text>
      <Text style={styles.text}>Pokemon rarity: {pokemon.rarity}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 25,
  }
});
