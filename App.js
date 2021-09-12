import React from 'react';
import { View, Text } from 'react-native';
import { JsonWork } from './src/components/JsonWork'; 
import { styles } from './src/components/styles';
import { TimeNow } from './src/components/TimeNow';


export default function App() 
{
  return (
    //контейнер фона
    <View style={styles.container}> 
      
      <View style={styles.container}> 
        {/* возврат приветствия */}
        <Text style={styles.fadtext}>
          <TimeNow/>
        </Text>  
      </View>  
      
      {/* возврат факта из бд*/}
      <JsonWork/>
    </View>
  );
}