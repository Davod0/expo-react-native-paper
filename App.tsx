import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import RootStackNavigator from './navigators/RootStackNavigator';

export default function App() {

  const colorStheme = useColorScheme();
  const theme = colorStheme === 'dark'? MD3DarkTheme : MD3LightTheme;

  console.log(colorStheme);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
          <StatusBar style="auto" />
          <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}


