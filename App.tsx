import { StatusBar, Text, View } from 'react-native';
import {
  useFonts,
  RedHatText_400Regular,
  RedHatText_700Bold,
} from '@expo-google-fonts/red-hat-text';
import { NativeBaseProvider } from 'native-base';

export default function App() {
  const [fontsLoaded] = useFonts({
    RedHatText_400Regular,
    RedHatText_700Bold,
  });

  return (
    <NativeBaseProvider>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <View /> : <View />}
    </NativeBaseProvider>
  );
}
