import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Image, Pressable, StyleSheet, View } from 'react-native';
import { Card, IconButton, Text } from 'react-native-paper';
import { pokemons } from '../data';
import { RootStackParamList } from '../navigators/RootStackNavigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({navigation, route}: Props) {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Details Screen</Text>
        {pokemons.map((pokemon) => (
            <Pressable key={pokemon.name}
                onPress={() => navigation.navigate("Details", {name: pokemon.name})}
                style={{padding:10}}>
               <Card>
                  <Card.Title title={pokemon.name} subtitle={pokemon.type}
                   left={() => <Image width={60} height={60}
                   style={{marginLeft: -12}} source={{uri: pokemon.url}}/>}
                   right={(props) => <IconButton {...props} icon="chevron-right" />}
                  />
                </Card>     
            </Pressable>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
  headerText:{
    fontSize: 35,
    paddingBottom: 25,
  },
   text:{
    fontSize: 25,
  }
});
