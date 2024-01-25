import React, { useState, useEffect } from 'react';
import { Text } from '../components/Themed';
import { parseString } from 'react-native-xml2js';

// https://www.transitchicago.com/developers/ttdocs/ <-- docs

export default function ApiExample() {
  const apiUrl = 'https://lapi.transitchicago.com/api/1.0/ttarrivals.aspx?key=a29c1bad63084bbcaf5ae6a47609150e&mapid=40380';
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.text(); // Note: using text() instead of json()
      })
      .then(xmlData => {
        parseString(xmlData, (err, result) => {
          if (err) {
            throw new Error('Error parsing XML:', err);
          }
          console.log(result);
          setData(result); // Set the parsed data in the state
        });
      })
      .catch(error => {
        console.error('Error fetching the API:', error);
      });
  }, [apiUrl]); // Include apiUrl in the dependency array to prevent unnecessary requests

  return (
    <Text>{data && <Text>{JSON.stringify(data, null, 2)}</Text>}</Text>
  );
}

