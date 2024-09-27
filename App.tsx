import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme, PaperProvider } from 'react-native-paper';
import RootStackNavigator from './navigators/RootStackNavigator';
import { combinedDarkTheme, combinedLightTheme } from './theme';

export default function App() {

  const colorStheme = useColorScheme();
  const theme = colorStheme === 'dark'? combinedDarkTheme : combinedLightTheme;
  console.log(colorStheme);

  
  

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
          <StatusBar style="auto" />
          <RootStackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
}


