import { Link } from 'expo-router';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';

interface ColorSearchLinkProps {
  color: string;
}

const ColorSearchLink: React.FC<ColorSearchLinkProps> = ({ color }) => {
  return (
    <Link href={`/search/${color}`} asChild>
      <Pressable style={styles.container}>
        <View style={[styles.colorBox, { backgroundColor: color }]} />
        <Text style={styles.text}>{color}</Text>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    width: '100%',
  },
  colorBox: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ColorSearchLink;
