import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { useColorScheme } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import RootStackNavigator from './navigators/RootStackNavigator';
import { combinedDarkTheme, combinedLightTheme } from './theme';

export default function App() {

  const colorSchema = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorSchema === "dark");
  const theme = isDarkMode ? combinedDarkTheme : combinedLightTheme;
  
  console.log(colorSchema);

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
          <StatusBar style="auto" />
          <RootStackNavigator isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
      </NavigationContainer>
    </PaperProvider>
  );
}


