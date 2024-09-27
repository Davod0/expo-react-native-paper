import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext } from "react";
import { Button } from "react-native-paper";
import { ThemeContext } from "../providers/ThemeProvider";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";
import SettingsScreen from "../screens/SettingsScreen";

export type RootStackParamList = {
    Home: undefined;
    Details: { name: string };
    Settings: undefined;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator(){


    return(
        <RootStack.Navigator screenOptions={({navigation})  => ({
            headerRight: () => (<Button onPress={() => navigation.navigate("Settings")}>Settings</Button>),
        })}>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Details" component={DetailsScreen} />
            <RootStack.Screen name="Settings" component={SettingsScreen} />
        </RootStack.Navigator>
    );
} 