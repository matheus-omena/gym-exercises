import { StatusBar, Text, View } from 'react-native';
import {
  useFonts,
  RedHatText_400Regular,
  RedHatText_700Bold,
} from '@expo-google-fonts/red-hat-text';
import { NativeBaseProvider } from 'native-base';
import { Loading } from '@components/loading';
import { THEME } from 'src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    RedHatText_400Regular,
    RedHatText_700Bold,
  });

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <View /> : <Loading />}
    </NativeBaseProvider>
  );
}
