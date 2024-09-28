import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { createContext, PropsWithChildren, useState } from "react";
import { useColorScheme } from "react-native";
import { PaperProvider } from "react-native-paper";
import { combinedDarkTheme, combinedLightTheme } from "../theme";


interface ContextValue{
    colorMode: "light" | "dark" | "auto";
    setColorMode: (value: "light" | "dark" | "auto") => void;
}

export const ThemeContext = createContext<ContextValue>({} as ContextValue);

export default function ThemeProvider({children}: PropsWithChildren){

   const colorSchema = useColorScheme();
   const [colorMode, setColorMode] = useState<"light" | "dark" | "auto">("auto");

   const theme = colorMode === "dark" || (colorMode === "auto" &&
   colorSchema === "dark")? combinedDarkTheme : combinedLightTheme;

    return(
        <ThemeContext.Provider value={{colorMode, setColorMode}}>
            <StatusBar style={
                colorMode === "light"? "dark" : colorMode === "dark"? "light" : "auto"
                } /> 
            <PaperProvider theme={theme}>
                <NavigationContainer theme={theme}>
                    {children}
                </NavigationContainer>
            </PaperProvider>
        </ThemeContext.Provider>
    );
};
