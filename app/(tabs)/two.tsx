import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';

import ApiExample from '../../components/ApiExample';

export default function TabTwoScreen() {
   return (
     <View style={styles.container}>
      <Text style={styles.title}>Tab Two</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text> Hey! This tab is just an example of the API and will be deleted in a future iteration</Text>
      <ScrollView>
        <ApiExample />
      </ScrollView>
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
