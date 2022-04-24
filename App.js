import { StyleSheet, View, Text } from 'react-native';
import HomeComponent from './Components/HomeComponent';
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, WorkSans_400Regular } from '@expo-google-fonts/work-sans';
import AppLoading from 'expo-app-loading';

export default function App() {

  let [fontsLoaded, error] = useFonts({
    WorkSans_400Regular
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#830165', '#5c0087']}
        locations={[0.2, 0.5]}
      >
        <Text style={{fontFamily: 'WorkSans_400Regular', color: '#fff', fontSize: 40}}>This is a font test.</Text>
        <HomeComponent />
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c0187'
  }
})
