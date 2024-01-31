import { Link } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

import { Text, View } from '../components/Themed';

interface ColorSearchLinkProps {
  color: string;
}

const ColorSearchLink: React.FC<ColorSearchLinkProps> = ({ color }) => {
  return (
    <View style={{flex: 1, width: '100%', backgroundColor: color}} >
        <Link href={`/search/${color}`} asChild>
        <Pressable>
            <Text>{color}</Text>
        </Pressable>
        </Link>
    </View>
  );
};

export default ColorSearchLink;
