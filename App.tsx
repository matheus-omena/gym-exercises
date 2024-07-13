import { StatusBar, Text, View } from 'react-native';
import {
  useFonts,
  RedHatText_400Regular,
  RedHatText_700Bold,
} from '@expo-google-fonts/red-hat-text';

export default function App() {
  const [fontsLoaded] = useFonts({
    RedHatText_400Regular,
    RedHatText_700Bold,
  });

  return (
    <View>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Text>Open up App.tsx to start working on your app!</Text> : <View />}
    </View>
  );
}
