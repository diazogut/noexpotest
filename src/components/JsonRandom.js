import React, {useEffect, useState,useRef } from 'react';
import { View, Text, Animated, TouchableWithoutFeedback } from 'react-native';
import { styles } from './styles';
import {API_URL, API_ARTICLES_ALL} from './ApiConfig';
import { Random_EL_ALL } from './JsonMethod';

//Обращается к базе и возвращает рандомный текст из таблицы
export const JsonArticles = () => 
{
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const fadeIn = () => 
    {
        // анимация открытия
        Animated.timing(fadeAnim, 
        {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
        }).start();
    };

    // анимация скрытия элемента отключена
    // const fadeOut = () => 
    // {
    //     setTimeout(() => 
    //     {
    //     // анимация скрытия
    //     Animated.timing(fadeAnim, 
    //         {
    //         toValue: 0,
    //         duration: 1000,
    //         useNativeDriver: true,
    //         }).start();
    //     },10000)
    // };

    const [data, setData] = useState([]);

    //принимает значение массива и выбирает из него рандомный элемент
    function arrayRandElement(arr) 
    {
        var rand = Math.floor(Math.random() * arr.length);
        return arr[rand];
    }

    //в асинхронном режиме подключаемся к API, забираем json, отдаем в функцию выбора рандома, возвращаем поле body
    const fetchAndLog = async () => 
    {
        setData('Загрузка ...');
        try 
        {
            const response = await fetch(API_URL+API_ARTICLES_ALL);            
            const json = await response.json();
            const body = (Random_EL_ALL(json));
            setData(body);
            return body;
        }
        catch (error)
        {
            console.error(error);
            const body = 'Не могу подключиться к серверу, проверьте подключение'
            setData(body);
        }   
    }

    //обработка нажатия, выполнить функцию подключения к бд
    const onPress = () => 
    {
        fetchAndLog()
    }

    useEffect(() => 
    {
        fetchAndLog();
    }, []);

    return (            
       <View style={styles.containerh} >    
       <TouchableWithoutFeedback onPress={onPress}>
            <Animated.View style={[ { opacity: fadeAnim } ]}>                  
                <Text style={styles.ttimenow}>{data}</Text>            
                {fadeIn()}   
            </Animated.View>
            </TouchableWithoutFeedback>             
        </View>      
    )          
    
}
