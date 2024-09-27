import {
    DarkTheme as NavigationDarkTheme,
    DefaultTheme as NavigationLightTheme,
} from "@react-navigation/native";
import {
    adaptNavigationTheme,
    MD3DarkTheme,
    MD3LightTheme,
} from "react-native-paper";

const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationLightTheme,
    reactNavigationDark: NavigationDarkTheme,
});

export const combinedLightTheme = {
    ...MD3LightTheme,
    ...LightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...LightTheme.colors,
        primary: "#549356",
    },
};

export const combinedDarkTheme = {
    ...MD3DarkTheme,
    ...DarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...DarkTheme.colors,
        primary: "#64c366",
    },
};