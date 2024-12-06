import React, { useEffect } from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Header from '../../../constants/Header';

const ActiveLoanScreen = ({ userName = 'UserName', navigation }:any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const loans = [
    {
      id: '1',
      loanId: 'PFL-PL/22/PDL/0000001',
      productName: 'Personal Loan Product',
      amount: '1,000,000',
      interest: '18%',
      tenure: '12 months',
      repayment: '7%',
    },
    {
      id: '2',
      loanId: 'PFL-PL/22/PDL/0000002',
      productName: 'Car Loan',
      amount: '500,000',
      interest: '10%',
      tenure: '24 months',
      repayment: '5%',
    },
    {
      id: '3',
      loanId: 'PFL-PL/22/PDL/0000003',
      productName: 'Home Loan',
      amount: '5,000,000',
      interest: '7%',
      tenure: '120 months',
      repayment: '3%',
    },
    {
      id: '4',
      loanId: 'PFL-PL/22/PDL/0000004',
      productName: 'Education Loan',
      amount: '800,000',
      interest: '12%',
      tenure: '36 months',
      repayment: '4%',
    },
    {
      id: '5',
      loanId: 'PFL-PL/22/PDL/0000005',
      productName: 'Business Loan',
      amount: '2,000,000',
      interest: '15%',
      tenure: '60 months',
      repayment: '6%',
    },
  ];

  const renderLoanCard = ({ item }:any) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: isDarkMode ? '#333' : '#fff' }]}
      onPress={() => navigation.navigate('YourLoan', { loanId: item.loanId })}
    >
      <View
        style={[styles.innerCard, { backgroundColor: isDarkMode ? '#292929' : 'transparent' }]}
      >
        <Text style={[styles.loanHeading, { color: isDarkMode ? '#fff' : '#000' }]}>
          {item.loanId}
        </Text>
        <Text style={[styles.subHeading, { color: isDarkMode ? '#ccc' : '#555' }]}>
          Product Name: {item.productName}
        </Text>
        <View style={styles.row}>
          <Text style={[styles.rowText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Loan Amount: {item.amount}
          </Text>
          <Text style={[styles.rowText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Rate of Interest: {item.interest}
          </Text>
        </View>
        <View style={styles.row}>
          <Text style={[styles.rowText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Tenure: {item.tenure}
          </Text>
          <Text style={[styles.rowText, { color: isDarkMode ? '#fff' : '#000' }]}>
            Repayment: {item.repayment}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View
      style={[styles.container, { backgroundColor: isDarkMode ? '#292929' : '#EDEDED' }]}
    > 
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* Top Section */}
      <View
        style={[styles.topSection, { backgroundColor: isDarkMode ? '#007BFF' : '#007BFF' }]}
      >
        <View style={styles.headerWrapper}>
    <Header navigation={navigation} />
  </View>
        <Text style={[styles.heading, { color: isDarkMode ? '#fff' : '#fff' }]}>
          Welcome {userName}
        </Text>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={isDarkMode ? '#fff' : '#000'}
          style={styles.notificationIcon}
        />
      </View>
     

      <Text style={[styles.loansHeading, { color: isDarkMode ? Colors.white : '#333' }]}>
  Your Active Loans
</Text>
      {/* Loan List */}
      <FlatList
        data={loans}
        keyExtractor={(item) => item.id}
        renderItem={renderLoanCard}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  headerWrapper: {
    position: 'absolute', 
    top: 11,
    left: 0,
    right: 0,
  },
  topSection: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heading: {
    marginTop:15,
    paddingLeft:80,
    fontSize: 20,
    fontWeight: 'bold',
  },
  notificationIcon: {
    marginRight: 3,
    marginBottom:10,
  },
  subText: {
    fontSize: 14,
    marginVertical: 8,
    paddingHorizontal: 16,
  },
  loansHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 12,
    paddingHorizontal: 16,
  },
  
  list: {
    paddingTop: 16,
  },
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    marginVertical:10,
    marginHorizontal:10,
  },
  innerCard: {
    borderRadius: 8,
    padding: 16,
  },
  loanHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subHeading: {
    fontSize: 14,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  rowText: {
    fontSize: 14,
  },
});

export default ActiveLoanScreen;
