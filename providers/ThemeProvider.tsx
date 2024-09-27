import { NavigationContainer } from "@react-navigation/native";
import { createContext, PropsWithChildren, useState } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { combinedDarkTheme, combinedLightTheme } from "../theme";
import { StatusBar } from 'expo-status-bar';



interface ContextValue{
    isDarkMode: boolean;
    setIsDarkMode: (value: boolean) => void;
}

export const ThemeContext = createContext<ContextValue>({} as ContextValue);

export default function ThemeProvider({children}: PropsWithChildren){

   const colorSchema = useColorScheme();
   const [isDarkMode, setIsDarkMode] = useState(colorSchema === "dark");
   const theme = isDarkMode ? combinedDarkTheme : combinedLightTheme;
  
    return(
        <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>
            <StatusBar style="auto" />
            <PaperProvider theme={theme}>
                <NavigationContainer theme={theme}>
                    {children}
                </NavigationContainer>
            </PaperProvider>
        </ThemeContext.Provider>
    );
};