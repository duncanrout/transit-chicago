import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';

import React from 'react';
import ApiExample from '../../components/ApiExample';
import { ScrollView } from 'react-native-gesture-handler';



export default function TabTwoScreen() {
   return (
     <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      <Text> Hey! This tab is just an example of the API and will be deleted in a future iteration</Text>
      <ScrollView><ApiExample /></ScrollView>
      
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
});
