import React from 'react';
import { Pressable } from 'react-native';
import { Link } from 'expo-router';
import { useStationContext } from './StationContext'; // Import the context

import { Text, View } from './Themed';

interface TrainSearchLinkProps {
  name: string;
}

const TrainSearchLink: React.FC<TrainSearchLinkProps> = ({ name }) => {
  const { setCurrentStation } = useStationContext(); // Access setCurrentStation from the context

  const handlePress = () => {
    // Update the current station to chosen station name
    setCurrentStation({
      stationName: name,
      colors: []
    });
  };

  return (
    <View style={{ flex: 1, width: '100%', backgroundColor: name }}>
      {/* Link to home screen and set currentStation state to the clicked on station */}
      <Link href={`/`} asChild>
        <Pressable onPress={handlePress}>
          <Text>{name}</Text>
        </Pressable>
      </Link>
    </View>
  );
};

export default TrainSearchLink;
