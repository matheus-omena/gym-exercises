import { StatusBar } from 'react-native';
import {
  useFonts,
  RedHatText_400Regular,
  RedHatText_700Bold,
} from '@expo-google-fonts/red-hat-text';
import {
  RedHatDisplay_400Regular,
  RedHatDisplay_700Bold,
} from '@expo-google-fonts/red-hat-display';
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@components/loading';
import { THEME } from 'src/theme';
import { AppRoutes } from '@routes/app.routes';
import { Routes } from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    RedHatText_400Regular,
    RedHatText_700Bold,
    RedHatDisplay_400Regular,
    RedHatDisplay_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </NativeBaseProvider>
  );
}
