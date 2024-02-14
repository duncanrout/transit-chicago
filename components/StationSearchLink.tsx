import React from 'react';
import { Pressable } from 'react-native';
import { Link } from 'expo-router';

import { useStationContext } from './StationContext';

import { Text } from './Themed';

interface TrainSearchLinkProps {
  name: string;
}

const TrainSearchLink: React.FC<TrainSearchLinkProps> = ({ name }) => {
  const { setCurrentStation } = useStationContext();

  const handlePress = () => {
    // Update the current station to chosen station name
    setCurrentStation({
      stationName: name,
      //TODO: handle colors
      colors: []
    });
  };

  return (
    <>
      {/* Link to home screen and set currentStation state to the clicked on station */}
      <Link href={`/`} asChild>
        <Pressable onPress={handlePress}>
          <Text style={{ fontSize: 50 }}>{name}</Text>
        </Pressable>
      </Link>
    </>

  );
};

export default TrainSearchLink;
