import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
const DATA = [
  {
    id: 'firstItem1',
    title: 'First Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'secondItem1',
    title: 'Second Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'thirdItem1',
    title: 'Third Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'firstItem2',
    title: 'First Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'secondItem2',
    title: 'Second Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'thirdItem2',
    title: 'Third Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'firstItem3',
    title: 'First Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'secondItem3',
    title: 'Second Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'thirdItem3',
    title: 'Th Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'firstItem4',
    title: 'First Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'secondItem4',
    title: 'Second Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'thirdItem4',
    title: 'Third Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'firstItem5',
    title: 'First Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'secondItem5',
    title: 'Second Item',
    line: 'The Station',
    until: 28+" mins",
  },
  {
    id: 'thirdItem5',
    title: 'Third Item',
    line: 'The Station',
    until: 28+" mins",
  },
];
type ItemProps = {line: string,
                  until: string,
                  title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Nearest Stations</Text>
      
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
       
          <FlatList 
            style={{margin:5}}
            nestedScrollEnabled={true}
            data={DATA}
            renderItem={({item}) => <Item title={item.title} until={item.until} line={item.line}/>}/> 
        
        
          <FlatList 
          style={{margin:5}}
          nestedScrollEnabled={true}
            data={DATA} 
            renderItem={({item}) => <Item title={item.title} until={item.until} line={item.line}/>}/>
        
        
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
    borderColor:'black',
    borderWidth:1,
    width:800,
  },
  timeUntil:{

  },
  flatlist: {
    padding:5
  },
  header: {

  },
});
