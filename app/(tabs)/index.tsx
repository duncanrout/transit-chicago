import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList } from 'react-native-gesture-handler';
const DATA = [
  {
    id: 'firstItem1',
    title: 'First Item',
  },
  {
    id: 'secondItem1',
    title: 'Second Item',
  },
  {
    id: 'thirdItem1',
    title: 'Third Item',
  },
  {
    id: 'firstItem2',
    title: 'First Item',
  },
  {
    id: 'secondItem2',
    title: 'Second Item',
  },
  {
    id: 'thirdItem2',
    title: 'Third Item',
  },
  {
    id: 'firstItem3',
    title: 'First Item',
  },
  {
    id: 'secondItem3',
    title: 'Second Item',
  },
  {
    id: 'thirdItem3',
    title: 'Third Item',
  },
];
type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nearest Stations</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList 
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}/> 
      <FlatList data={undefined} renderItem={undefined}/>
      
      <EditScreenInfo path="app/(tabs)/index.tsx" />
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

  },
  timeUntil:{

  }
});
