import React from 'react';
import { Dimensions } from 'react-native';

import { Text, View } from '../components/Themed';

interface TrainItemProps {
  color: string;
  stationName: string;
  distance: number;
  time: number;
}

const TrainItem: React.FC<TrainItemProps> = ({ color, stationName, distance, time }) => {
  return (
    <View>
      <View style={{
        flex: 1,
        width: '5%',
        backgroundColor: color
      }} />
      <View style={{
        flex: 2,
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.1,
        height: Dimensions.get('window').width * 0.1,
        backgroundColor: 'gray'
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
};

export default TrainItem;
