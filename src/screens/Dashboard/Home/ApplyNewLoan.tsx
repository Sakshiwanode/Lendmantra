import { View, Text, TextInput, FlatList, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import { Colors, FontSize } from '../../../constants/Colors';
import Header from '../../../constants/Header';


const ApplyNewLoanScreen = ({navigation}:any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const months = ['12 months', '1 year', '2 years', '3 years'];

  const renderItem = ({ item }:any) => (
    <View style={styles.monthItem}>
      <Text style={styles.monthText}>{item}</Text>
    </View>
  );

  const handleApplyLoan = () => {
    
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
     <View style={styles.headerWrapper}>
          <Header navigation={navigation} />
        </View>
      <View style={styles.topSection}>
        <Text style={[styles.heading, { color: isDarkMode ? Colors.white : Colors.black }]}>Apply New Loan</Text>
        <View style={[styles.card, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.cardBackground }]}>
          <Text style={[styles.label, { color: isDarkMode ? Colors.white : Colors.black }]}>Enter Loan Amount</Text>
          <View style={styles.inputWrapper}>
            <Text style={[styles.currencySymbol, { color: isDarkMode ? Colors.white : Colors.black }]}>$</Text>
            <TextInput
              style={[styles.inputBox, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground, color: isDarkMode ? Colors.white : Colors.black }]}
              keyboardType="numeric"
              placeholder="Enter amount"
              placeholderTextColor={isDarkMode ? Colors.mediumGray : Colors.gray}
            />
          </View>
          <Text style={[styles.label, { color: isDarkMode ? Colors.white : Colors.black }]}>Choose Time</Text>
          <FlatList
            data={months}
            horizontal
            renderItem={renderItem}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Apply Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: isDarkMode ? Colors.primary : Colors.primary }]}
          onPress={handleApplyLoan}
        >
          <Text style={[styles.buttonText, { color: Colors.white }]}>Apply</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom Section */}
      <View style={[styles.bottomSection,{ backgroundColor: isDarkMode ? Colors.blue: Colors.blue }]}>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerWrapper: {
    position: 'absolute', 
    top: 9,
    left: 0,
    right: 0,
  },
  topSection: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderBottomLeftRadius:60,
    borderBottomRightRadius:60,
  },
  bottomSection: {
    flex: 0.3,
    backgroundColor: Colors.lightBackground,
    padding: 20,
    borderTopLeftRadius: 60,  
    borderTopRightRadius: 60, 
   
  },
  heading: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  label: {
    fontSize: FontSize.medium,
    marginVertical: 10,
  },
  inputWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: Colors.tertiary,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    alignItems: 'center',
  },
  currencySymbol: {
    fontSize: FontSize.medium,
    marginRight: 5,
  },
  inputBox: {
    flex: 1,
    fontSize: FontSize.medium,
    height: 40,
    paddingLeft: 10,
    borderRadius: 5,
  },
  monthItem: {
    padding: 10,
    marginHorizontal: 5,
    backgroundColor: Colors.primary,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  monthText: {
    color: Colors.white,
    fontSize: FontSize.medium,
  },
  button: {
    marginTop: 20,
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FontSize.xLarge,
    fontWeight: 'bold',
  },
});

export default ApplyNewLoanScreen;
