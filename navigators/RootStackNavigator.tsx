import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Switch } from "react-native-paper";
import { ThemeContext } from "../providers/ThemeProvider";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";

export type RootStackParamList = {
    Home: undefined;
    Details: { name: string };
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator(){

    const {isDarkMode, setIsDarkMode} = useContext(ThemeContext);

    return(
        <RootStack.Navigator screenOptions={{
            headerRight: () => <Switch value={isDarkMode} onValueChange={setIsDarkMode}/>,
        }}>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Details" component={DetailsScreen} />
        </RootStack.Navigator>
    );
} 