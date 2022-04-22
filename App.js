import { StyleSheet, View } from 'react-native';
import HomeComponent from './Components/HomeComponent';

export default function App() {
  return (
    <View style={styles.container}>
      <HomeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 25
  },
})
