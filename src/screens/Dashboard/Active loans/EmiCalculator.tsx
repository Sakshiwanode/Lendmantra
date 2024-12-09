import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import Header from '../../../constants/Header';
import { Colors, FontSize } from '../../../constants/Colors';

const EmiCalculatorScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);
  
  const [loanAmount, setLoanAmount] = useState('');
  const [loanTenure, setLoanTenure] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenureUnit, setTenureUnit] = useState('yr'); 

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const handleTenureUnitToggle = (unit: string) => {
    setTenureUnit(unit);
  };

  const handleCalculateEmi = () => {
    
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>
      
      <Text style={[styles.heading, { color: isDarkMode ? Colors.white : Colors.black }]}>
        Loan EMI Calculator
      </Text>
      
      <View style={styles.inputWrapper}>
        <Text style={[styles.label, { color: isDarkMode ? Colors.white : Colors.black }]}>Loan Amount</Text>
        <View style={styles.inputBoxWrapper}>
          <Text style={styles.currencySymbol}>₹</Text>
          <TextInput
            style={[styles.inputBox, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground }]}
            placeholder="Enter loan amount"
            placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
            keyboardType="numeric"
            value={loanAmount}
            onChangeText={setLoanAmount}
          />
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={[styles.label, { color: isDarkMode ? Colors.white : Colors.black }]}>Loan Tenure</Text>
        <View style={styles.tenureWrapper}>
          <TextInput
            style={[styles.inputBox, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground }]}
            placeholder="Enter tenure"
            placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
            keyboardType="numeric"
            value={loanTenure}
            onChangeText={setLoanTenure}
          />
          <View style={styles.tenureUnitWrapper}>
            <TouchableOpacity
              style={[styles.unitBox, tenureUnit === 'yr' && styles.unitBoxActive]}
              onPress={() => handleTenureUnitToggle('yr')}
            >
              <Text style={styles.unitText}>yr</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.unitBox, tenureUnit === 'mo' && styles.unitBoxActive]}
              onPress={() => handleTenureUnitToggle('mo')}
            >
              <Text style={styles.unitText}>mo</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <Text style={[styles.label, { color: isDarkMode ? Colors.white : Colors.black }]}>Interest Rate</Text>
        <View style={styles.inputBoxWrapper}>
          <TextInput
            style={[styles.inputBox, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground }]}
            placeholder="Enter interest rate"
            placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
            keyboardType="numeric"
            value={interestRate}
            onChangeText={setInterestRate}
          />
          <Text style={styles.percentageSymbol}>%</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculateEmi}>
        <Text style={styles.calculateButtonText}>Calculate EMI</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  headerWrapper: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
  },
  heading: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    marginTop: 0,
  },
  inputWrapper: {
    marginBottom: 20,
    width: '100%', 
  },
  label: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  inputBoxWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  inputBox: {
    flex: 1,
    height: 40, // Fixed height to prevent shrink
    fontSize: FontSize.medium,
    color: Colors.black,
  },
  currencySymbol: {
    fontSize: FontSize.large,
    color: Colors.mediumGray,
  },
  tenureWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Ensures proper spacing
  },
  tenureUnitWrapper: {
    flexDirection: 'row',
    marginLeft: 10,
  },
  unitBox: {
    padding: 8,
    borderRadius: 5,
    backgroundColor: Colors.gray,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  unitBoxActive: {
    backgroundColor: Colors.primary,
  },
  unitText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Colors.white,
  },
  percentageSymbol: {
    fontSize: FontSize.large,
    marginLeft: 5,
    color: Colors.mediumGray,
  },
  calculateButton: {
    backgroundColor: Colors.primary,
    paddingVertical: 12,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%', // Full width button
  },
  calculateButtonText: {
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});


export default EmiCalculatorScreen;
