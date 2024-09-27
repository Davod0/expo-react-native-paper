import { createNativeStackNavigator } from "@react-navigation/native-stack";


type RootStackParamList = {
    Home: undefined;
    Detail: { id: number };
}

const RootStack = createNativeStackNavigator<RootStackParamList>();
