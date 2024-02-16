import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';

import * as Location from 'expo-location';

export default function LocationFinder() {
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.log('hi')
        return;
      }

      let location = await Location.getCurrentPositionAsync({});

      setLocation(location);
      console.log(location)
    })();
  }, []);

  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
}


// // import GetLocation from 'react-native-get-location'
// // import React, { useState, useEffect } from 'react';
// // import { Platform } from 'react-native';
// // import { State } from 'react-native-gesture-handler';
// // import { Text, View } from '../components/Themed';


// // // Will Async Test
// // export default function LocationFinder() {
// //   const [loc, setLoc] = useState(2);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   useEffect(() => {
// //     GetLocation.getCurrentPosition({
// //       enableHighAccuracy: true,
// //       timeout: 6000,
// //     })
// //     .then(location => {
// //       setLoc(location.latitude)
// //       console.log('HIIIII', location.latitude)
// //       setLoading(false)
// //     })
// //     .catch(error => {
// //       setError(error);
// //       setLoading(false);
// //     });
// //   }, []);


//   // if (loading) 
//   // return (
//   //     <Text>Loading...</Text>
//   // )


//   // if (error) 
//   // return (
//   //     <Text>error...</Text>
//   // )

//   const val = loc
//   return (
//       <Text>We are {val} away</Text>    
//   )
// }

    

