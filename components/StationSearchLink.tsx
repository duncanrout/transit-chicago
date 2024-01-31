import { Link } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { Text, View } from './Themed';

interface TrainSearchLinkProps {
  name: string;
}

const TrainSearchLink: React.FC<TrainSearchLinkProps> = ({ name }) => {
  return (
    <View style={{flex: 1, width: '100%', backgroundColor: name}} >
      {/* Link to home screen and set currentStation state to the clicked on station */}
        {/* <Link href={`/search/${name}`} asChild> */}
        <Pressable>
            <Text>{name}</Text>
        </Pressable>
        {/* </Link> */}
    </View>
  );
};

export default TrainSearchLink;
