import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";


type RootStackParamList = {
    Home: undefined;
    Details: { id: number };
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator(){

    return(
        <RootStack.Navigator>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Details" component={DetailsScreen} />
        </RootStack.Navigator>
    );
} 