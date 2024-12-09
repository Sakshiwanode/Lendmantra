import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useColorScheme,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import { Colors, FontSize } from '../../../constants/Colors';
import Header from '../../../constants/Header';

const ClosedLoanScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const loanData = [
    { id: '1', title: 'Loan 1',loanType:'Home Loan' },
    { id: '2', title: 'Loan 2',loanType:'Car Loan' },
    { id: '3', title: 'Loan 3',loanType:'Personal Loan'},
    
  ];

  const renderLoanCard = ({ item }: any) => (
    <View
      style={[
        styles.card,
        { backgroundColor: isDarkMode ? Colors.cardBackgroundDark : Colors.cardBackground },
      ]}
    >
      <View style={[
        styles.Progresscircle,
        { backgroundColor: isDarkMode ? Colors.cardBackgroundDark : Colors.cardBackground },
      ]}>
      <Progress.Circle
        progress={1}
        size={100}
        thickness={8}
        color={Colors.primary}
        unfilledColor={Colors.gray}
        borderWidth={0}
      />
      </View>
      <Text style={[styles.progressText, { color: isDarkMode ? Colors.white : Colors.black }]}>100%</Text>
      <Text style={[styles.loanTypeText, { color: isDarkMode ? Colors.white : Colors.black }]}>
        {item.loanType}
      </Text>
      <Text style={[styles.loanText, { color: isDarkMode ? Colors.white : Colors.black }]}>
         Completed
      </Text>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground },
      ]}
    >
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>
      <Text
        style={[
          styles.heading,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}
      >
        Closed Loan
      </Text>
      <FlatList
        data={loanData}
        renderItem={renderLoanCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

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
  heading: {
    top:70,
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  listContent: {
    paddingVertical: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  Progresscircle:{
    top:20,

  },

  card: {
    top:80,
    width: '48%',
    alignItems: 'center',
    padding: 16,
    borderRadius: 10,
    elevation: 5,
    shadowColor: Colors.gray,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    marginBottom: 16,
  },
  progressText: {
    bottom:'30%',
    fontSize: FontSize.medium,
    color: Colors.primary,
    fontWeight: 'bold',
    marginTop: 10,
  },
  loanTypeText: {
   marginTop:1,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  loanText: {
    marginTop: 5,
    fontSize: FontSize.small,
    fontWeight: 'bold',
  },
});

export default ClosedLoanScreen;
