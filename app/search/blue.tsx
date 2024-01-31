import TrainSearchLink from "../../components/StationSearchLink";
import { View, Text } from "../../components/Themed";
import { StyleSheet } from 'react-native';
import { trainStations, TrainStationList } from "../../constants/TrainStations";

export default function Blue() {
  const blueStations = trainStations.Blue?.length > 0 ? trainStations.Blue : ["No station available"];
  const firstBlueStation = blueStations[0];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a train</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TrainSearchLink name={firstBlueStation}></TrainSearchLink>
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
