import TrainSearchLink from "../../components/StationSearchLink";
import { View, Text } from "../../components/Themed";
import { StyleSheet } from 'react-native';

import { trainStations } from "../../constants/TrainStations";
import { FlatList } from "react-native-gesture-handler";


export default function brown() {

  const brownStations = trainStations.Brown?.length > 0 ? trainStations.Brown : ["No station available"];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a train</Text>
      <FlatList
        style={{ margin: '5%' }}
        data={brownStations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TrainSearchLink name={item} />}
      />
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

