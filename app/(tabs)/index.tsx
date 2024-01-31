import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Dimensions } from 'react-native';
/** import { TrainItem } from '../../components/TrainItem' */
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
type ItemProps = {line: string;
                  until: string;
                  title: string;
                };
  
                  
interface TrainItemProps {
                    color: string;
                    stationName: string;
                    distance: number;
                    time: number;
                }
const Item = ({stationName}: TrainItemProps) => (
  <View style={[
    styles.container,
    {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width:Dimensions.get('window').width * 0.8,
    },
  ]}>
            <View style={{flex:1,  
                          backgroundColor: 'yellow',
                          height: 100,
                          margin:5,
                          }} />
            <View style={{flex:2,
                          borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
                          width: Dimensions.get('window').height * 0.1,
                          height: Dimensions.get('window').height * 0.1,
                          backgroundColor: 'gray',
                          margin: '5%',
                          alignItems:'center', 
                          justifyContent:'center'
                          }}>
                <Text>2</Text>
            </View>
            <View style={{flex:7,
                          }}>
                <Text> _ to _ in _ Minutes</Text>
            </View>
        </View>
);

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.title}>Station Name</Text>
      
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
       <Text> Inbound </Text>
          <FlatList 
            style={{margin:'5%'}}
            nestedScrollEnabled={true}
            data={DATA}
            renderItem={({item}) => <Item color='green' stationName='Quincy' distance={6} time={6}/> }/> 
        
        <Text> Outbound </Text>
          <FlatList 
          style={{margin:'5%'}}
          nestedScrollEnabled={true}
            data={DATA} 
            renderItem={({item}) => <Item title={item.title} until={item.until} line={item.line}/>}/>
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
