import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import { Colors, FontSize } from '../../../constants/Colors';
import Header from '../../../constants/Header';

const RepaymentHistoryScreen= ({navigation}:any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  

  
  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
    <View style={styles.headerWrapper}>
       <Header navigation={navigation} />
     </View>
      <Text>RepaymentHistoryScreen</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerWrapper: {
    position: 'absolute', 
    top: 9,
    left: 0,
    right: 0,
  },
});
export default RepaymentHistoryScreen;



