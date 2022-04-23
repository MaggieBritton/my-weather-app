import { StyleSheet, View, ImageBackground } from 'react-native';
import HomeComponent from './Components/HomeComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/images/sunny.jpg')} style={styles.backgroundImage}>
        <View style={styles.homeContainer}>
          <HomeComponent />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  homeContainer: {
    flex: 1,
    margin: 20
  }
})
