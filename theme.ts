{/*
Denna kod skapar två anpassade teman (ljus och mörk) som kan användas i en React Native-app.
Vi kombinerar teman från två olika bibliotek:
1. "@react-navigation/native" (för navigationsrelaterade teman)
2. "react-native-paper" (som följer Googles Material Design-standard).
Målet är att skapa ett enhetligt tema för både appens navigering och UI-komponenter,
samt att anpassa vissa färger efter våra behov (t.ex. primärfärg och textfärg).
*/}


{/*
Här importerar vi teman från "@react-navigation/native". De används för att 
definiera utseendet för navigationskomponenterna.
*/}
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme, Theme }
    from "@react-navigation/native";

{/*
Vi importerar också teman från "react-native-paper". Dessa teman följer Material Design-standard
och används för att styra hur UI-komponenter (knappar, kort, etc.) ska se ut.
'adaptNavigationTheme' låter oss anpassa navigations-temana så de fungerar ihop med Material Design
*/}
import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme }
    from "react-native-paper";

// 'ThemeProp' är en typdefinition från react-native-paper som beskriver hur ett tema ska se ut,
import { ThemeProp } from "react-native-paper/lib/typescript/types";

{/*
Vi anpassar navigations-temana från react-navigation så att de fungerar ihop med Paper-temana.
Vi får två teman som resultat: ett för ljust läge ('LightTheme') och ett för mörkt läge ('DarkTheme')
*/}
const { LightTheme, DarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationLightTheme,
    reactNavigationDark: NavigationDarkTheme,
});

{/*
'AppTheme' är en typdefinition som kombinerar både react-native-paper's tema (ThemeProp)
och react-navigation's tema (Theme). Detta gör att vi kan skapa teman som fungerar över hela appen,
både för navigation och UI-komponenter.
*/}
export type AppTheme = ThemeProp & Theme;

{/*
Här skapar vi ett kombinerat ljust tema ('combinedLightTheme').
Vi använder spridningsoperatorn (...) för att kombinera teman från både react-native-paper och navigation.
Dessutom anpassar vi några specifika färger, t.ex. primärfärgen och textfärgen.
Färgen "primary" definierar en grön nyans (#549356) som kommer att användas som huvudfärg i hela appen.
*/}
export const combinedLightTheme: ThemeProp & Theme = {
    ...MD3LightTheme,
    ...NavigationLightTheme,
    colors: {
        ...MD3LightTheme.colors,  // Färger från Material Design-temat
        ...LightTheme.colors,     // Färger från navigationstemat
        primary: "#549356",       // Vi ändrar huvudfärgen (primärfärgen) till en grön nyans
        text: "#000000",          // Vi ändrar textfärgen till svart
    },
};


export const combinedDarkTheme = {
    ...MD3DarkTheme,
    ...NavigationDarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...DarkTheme.colors,
        primary: "#64c366",
        onSurface: "#f0a0a0",
    },
} satisfies AppTheme; // Kontrollera att det kombinerade temat uppfyller AppTheme-typen.
