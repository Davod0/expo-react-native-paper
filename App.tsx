import ThemeProvider from './providers/ThemeProvider';
import RootStackNavigator from './navigators/RootStackNavigator';

export default function App() {
  return (
    <ThemeProvider>
      <RootStackNavigator />
    </ThemeProvider>
  );
}


