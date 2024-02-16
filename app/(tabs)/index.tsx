import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';

import { Text, View } from '../../components/Themed';
import { useStationContext } from '../../components/StationContext';
import LocationFinder from '../../components/LocationFinder'
import DATA from '../../constants/MockData';


/** import { TrainItem } from '../../components/TrainItem' */

type ItemProps = {
  line: string;
  until: string;
  title: string;
};

interface TrainItemProps {
  color: string;
  stationName: string;
  distance: number;
  time: number;
}

const Item = ({ stationName }: TrainItemProps) => (
  <View style={[
    styles.container,
    {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: Dimensions.get('window').width * 0.8,
    },
  ]}>
    <View style={{
      flex: 1,
      backgroundColor: 'yellow',
      height: 100,
      margin: 5,
    }} />
    <View style={{
      flex: 2,
      borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
      width: Dimensions.get('window').height * 0.1,
      height: Dimensions.get('window').height * 0.1,
      backgroundColor: 'gray',
      margin: '5%',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Text>2</Text>
    </View>
    <View style={{
      flex: 7,
    }}>
      <Text> _ to _ in _ Minutes</Text>
    </View>
  </View>
);


export default function TabOneScreen() {

  const { currentStation } = useStationContext();
  // const { locationCurr } = LocationFinder();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{currentStation.stationName}</Text>
        {LocationFinder()}
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text> Inbound </Text>
      <FlatList
        style={{ margin: '5%' }}
        nestedScrollEnabled={true}
        data={DATA}
        renderItem={({ item }) => <Item color='green' stationName='Quincy' distance={6} time={6} />} />
      <Text> Outbound </Text>
      <FlatList
        style={{ margin: '5%' }}
        nestedScrollEnabled={true}
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} until={item.until} line={item.line} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  item: {
    borderColor: 'black',
    borderWidth: 1,
    width: 800,
  },
  timeUntil: {

  },
  flatlist: {
    padding: 5
  },
  header: {

  },
});
