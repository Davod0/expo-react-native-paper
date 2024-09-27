import { useContext } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { SegmentedButtons } from 'react-native-paper';
import { ThemeContext } from '../providers/ThemeProvider';


export default function SettingsScreen() {

    const {colorMode, setColorMode} = useContext(ThemeContext);

  return (
    <ScrollView style={styles.container}>
        <SegmentedButtons value={colorMode} 
            onValueChange={(value) => setColorMode(value as "light" | "dark" | "auto")} 
            buttons={[
                {value:"light", label:"Light"},
                {value:"dark", label:"Dark"},
                {value:"auto", label:"Auto"}
                ]}>
        </SegmentedButtons>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  text:{
    fontSize: 25,
  }
});
