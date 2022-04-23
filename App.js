import { StyleSheet, View } from 'react-native';
import HomeComponent from './Components/HomeComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.homeContainer}>
        <HomeComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5c0087'
  },
  homeContainer: {
    flex: 1,
  }
})
