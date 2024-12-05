import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useColorScheme,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import { Colors, FontSize } from '../../../constants/Colors';
import Header from '../../../constants/Header';

const YourLoanScreen = ({navigation}:any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const renderHorizontalCard = ({ item }:any) => (
    <View style={[styles.smallCard, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.cardBackground }]}>
      <Text style={[styles.smallCardText, { color: isDarkMode ? Colors.white : Colors.black }]}>
        {item.name}
      </Text>
    </View>
  );

  const horizontalCards = [
    { id: '1', name: 'Loan EMI' },
    { id: '2', name: 'Repayment Progress' },
    { id: '3', name: 'Calculate EMI' },
  ];

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
       <View style={styles.headerWrapper}>
          <Header navigation={navigation} />
        </View>

          {/* Heading above the card */}
      <Text style={[styles.loanIdHeading, { color: isDarkMode ? Colors.white : Colors.black }]}>
        PFL-PL/22/PDL/0000001
      </Text>

      <View style={[styles.card, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.cardBackground }]}>
        <Text style={[styles.heading, { color: isDarkMode ? Colors.white : Colors.black }]}>
          Loan Amount: $3,455,677
        </Text>
        <View style={styles.row}>
          <Text style={[styles.rowText, { color: isDarkMode ? Colors.white : Colors.black }]}>
            Monthly Repayment: $230,000
          </Text>
          <Text style={[styles.rowText, { color: isDarkMode ? Colors.white : Colors.black }]}>
            Balance: $345,566
          </Text>
        </View>
      </View>

      {/* Horizontal Cards */}
      <FlatList
        data={horizontalCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderHorizontalCard}
        contentContainerStyle={styles.horizontalList}
      />

      {/* Repayment History Section */}
      <Text style={[styles.sectionHeading, { color: isDarkMode ? Colors.white : Colors.black }]}>
        Repayment History
      </Text>
      <View style={[styles.Paymentcard, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.cardBackground }]}>
        <Text style={[styles.historyText, { color: isDarkMode ? Colors.white : Colors.black }]}>
          March Repayment
        </Text>
        <View style={styles.row}>
          <Text style={[styles.rowText, { color: isDarkMode ? Colors.white : Colors.black }]}>
            Date: 23/12/2024
          </Text>
          <Text style={[styles.rowText, { color: isDarkMode ? Colors.white : Colors.black }]}>
            Amount: $3,445,557
          </Text>
        </View>
      </View>
      <View style={[styles.Paymentcard, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.cardBackground }]}>
        <Text style={[styles.historyText, { color: isDarkMode ? Colors.white : Colors.black }]}>
          March Repayment
        </Text>
        <View style={styles.row}>
          <Text style={[styles.rowText, { color: isDarkMode ? Colors.white : Colors.black }]}>
            Date: 23/12/2024
          </Text>
          <Text style={[styles.rowText, { color: isDarkMode ? Colors.white : Colors.black }]}>
            Amount: $3,445,557
          </Text>
        </View>
      </View>
      
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  loanIdHeading: {
     marginTop:50,
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    textAlign: 'center',
   
  },
  card: {
    marginTop:30,
    paddingTop:150,
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  Paymentcard: {
   
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  heading: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    fontSize: FontSize.medium,
  },
  horizontalList: {
    marginBottom: 16,
  },
  smallCard: {
    width: 120,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  smallCardText: {
    fontSize: FontSize.medium,
    textAlign: 'center',
  },
  sectionHeading: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  historyText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerWrapper: {
    position: 'absolute', 
    top: 9,
    left: 0,
    right: 0,
  },
});
export default YourLoanScreen;