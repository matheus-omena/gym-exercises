import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
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
      {fontsLoaded ? <Text>Open up App.tsx to start working on your app!</Text> : <View />}
    </View>
  );
}
