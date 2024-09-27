import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Switch } from "react-native-paper";
import DetailsScreen from "../screens/DetailsScreen";
import HomeScreen from "../screens/HomeScreen";


export type RootStackParamList = {
    Home: undefined;
    Details: { name: string };
}

interface Props {
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator(props: Props){


    return(
        <RootStack.Navigator screenOptions={{
            headerRight: () => <Switch value={props.isDarkMode} onValueChange={props.setIsDarkMode}/>,
        }}>
            <RootStack.Screen name="Home" component={HomeScreen} />
            <RootStack.Screen name="Details" component={DetailsScreen} />
        </RootStack.Navigator>
    );
} 