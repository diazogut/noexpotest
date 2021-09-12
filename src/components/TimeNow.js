import React from 'react';
import { Text, View} from 'react-native';
import { styles } from './styles'; 

//функция приветствия в зависимости от времени суток
export function TimeNow() 
{ 
  var date = new Date();
  var current_hour = date.getHours();

  var night = ['0','1','2','3','4','5']
  var morning = ['6','7','8','9','10']
  var day = ['11','12','13','14','15','16','17']
  var evening = ['18','19','20','21','22','23']

  var timesofday =  [night,morning,day,evening]
  var justnow = false
  var i = 0

  //выполняй цикл, пока не найдет значение времени в массивах, описанных временами суток
  while (justnow === false) 
  {
    var justnow = timesofday[i].includes(current_hour.toString())
    
    if (justnow === true) 
    {
      if (i==0) 
      {
        var texth = "Доброй ночи!"
      }
      else if (i==1) 
      {
        var texth = "Доброе утро!"
      }
      else if (i==2) 
      {
        var texth = "Добрый день!"
      }
      else if (i==3) 
      {
        var texth = "Добрый вечер!"
      }
      break
    }
    i++
    if (i>4) {
      break
    }
  }        
  return (
    <View>
      <Text style={styles.ttimenow}>{texth} Интересный факт:</Text>     
    </View>
  )
        
 }