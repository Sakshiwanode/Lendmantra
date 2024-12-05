import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isDarkTheme, theme} from '../../../Redux/AuthSlice';
import {Colors, FontSize} from '../../../constants/Colors';

const LoanEmiScreen = () => {
    const dispatch = useDispatch();
    const systemColorScheme = useColorScheme();
    const isDarkMode = useSelector(isDarkTheme);

    useEffect(() => {
        dispatch(theme(systemColorScheme));
      }, [systemColorScheme, dispatch]);
    
  return (
    <View>
      <Text>LoanEmi</Text>
    </View>
  )
}

export default LoanEmiScreen