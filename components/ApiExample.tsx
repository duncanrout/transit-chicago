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
    <Text>
      {data && (
        <>
          <Text>Last Updated: {data.ctatt.tmst[0]}</Text>
          <Text>Error Code: {data.ctatt.errCd[0]}</Text>
          <Text>Error Name: {data.ctatt.errNm[0]}</Text>
  
          <Text>Train Information:</Text>
          {data.ctatt.eta.map((train, index) => (
            <Text key={index}>
              {[
                `Station ID: ${train.staId[0]}`,
                `Stop ID: ${train.stpId[0]}`,
                `Station Name: ${train.staNm[0]}`,
                `Stop Description: ${train.stpDe[0]}`,
                `Route: ${train.rt[0]}`,
                `Destination Station ID: ${train.destSt[0]}`,
                `Destination Name: ${train.destNm[0]}`,
                `Train Direction: ${train.trDr[0]}`,
                `Predicted Departure Time: ${train.prdt[0]}`,
                `Predicted Arrival Time: ${train.arrT[0]}`,
                `Is Approaching: ${train.isApp[0]}`,
                `Is Scheduled: ${train.isSch[0]}`,
                `Is Delayed: ${train.isDly[0]}`,
                `Is Flagged: ${train.isFlt[0]}`,
                `Latitude: ${train.lat[0]}`,
                `Longitude: ${train.lon[0]}`,
                `Heading: ${train.heading[0]}`,
              ].map((info, i) => (
                <React.Fragment key={i}>
                  <Text>{info}</Text>
                  <Text>{'\n'}</Text> {/* Line break */}
                </React.Fragment>
              ))}
            </Text>
          ))}
        </>
      )}
    </Text>
  );
}

