import TrainSearchLink from "../../components/StationSearchLink";
import { View, Text } from "../../components/Themed";
import { StyleSheet } from 'react-native';

export default function purple() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a train</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TrainSearchLink name="arglye"></TrainSearchLink>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Default, but explicitly setting it for clarity
    justifyContent: 'center', // Aligns items vertically at the center
    alignItems: 'center', // Aligns items horizontally at the center
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    // marginVertical: 30,
    height: 1,
    width: '80%',
  },
});

