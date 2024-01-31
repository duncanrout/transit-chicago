import { StatusBar } from 'expo-status-bar';
import { Platform, Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

import { Link } from "expo-router";
import ColorSearchLink from '../components/ColorSearchLink';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a color</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/* ChatGPT thinks busiest order is red, blue, brown, green, orange, purple, pink, yellow */}
      <ColorSearchLink color="red"/>
      <ColorSearchLink color="blue"/>
      <ColorSearchLink color="brown"/>
      <ColorSearchLink color="green"/>
      <ColorSearchLink color="orange"/>



      {/* Use a light status bar on iOS to account for the black space above the Search */}
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', // Default, but explicitly setting it for clarity
    justifyContent: 'center', // Aligns items vertically at the center
    alignItems: 'center', // Aligns items horizontally at the center
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    // marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
