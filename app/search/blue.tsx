import { StyleSheet } from 'react-native';

import TrainSearchLink from "../../components/StationSearchLink";
import { View, Text } from "../../components/Themed";

import { trainStations } from "../../constants/TrainStations";
import { FlatList } from 'react-native-gesture-handler';

export default function Blue() {
  const blueStations = trainStations.Blue?.length > 0 ? trainStations.Blue : ["No station available"];
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a train</Text>
      <FlatList
        style={{ margin: '5%' }}
        data={blueStations}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <TrainSearchLink name={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '80%',
  },
});
