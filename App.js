import { StyleSheet, View } from 'react-native';
import { Bulb } from './src/components/Bulb';

export default function App() {
  return (
    <View style={styles.container}>
      <Bulb />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
