import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../Redux/AuthSlice';
import { Colors, FontSize } from '../../constants/Colors';
import Header from '../../constants/Header';


const BankVerifyOTPScreen = ({navigation}:any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);
  const [otp, setOtp] = useState(['', '', '', '', '']);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const handleOtpChange = (text: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);
  }

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
        <View style={styles.headerWrapper}>
          <Header navigation={navigation} />
        </View>
      <Text style={[styles.heading, { color: isDarkMode ? Colors.primary : Colors.primary }]}> Bank Account Verification via OTP</Text>
      
      <Text style={[styles.subHeading, { color: isDarkMode ? Colors.primary : Colors.primary }]}>
        Insert the 5-digit code that we have sent you on your mobile number for Bank Account details
      </Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            keyboardType="numeric"
            maxLength={1}
            style={[
              styles.otpInput,
              {
                borderColor: isDarkMode ? Colors.primary : Colors.gray,
                backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground,
              },
            ]}
          />
        ))}
      </View>

      <TouchableOpacity
        onPress={() => {  }}
      >
        <Text style={[styles.resendCodeText, { color: isDarkMode ? Colors.primary : Colors.primary }]}>Resend Code</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.confirmButton, { backgroundColor: isDarkMode ? Colors.primary : Colors.primary }]}
        onPress={() => navigation.navigate('BankDetail')}
      >
        <Text style={[styles.confirmButtonText, { color: Colors.white }]}>Confirm</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    position: 'absolute', 
    top: 9,
    left: 0,
    right: 0,
  },
  heading: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeading: {
    fontSize: FontSize.medium,
    textAlign: 'center',
    marginBottom: 40,
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  otpInput: {
    width: '15%',
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: FontSize.large,
  },
 
  resendCodeText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    
  },
  confirmButton: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 10,
    width: '60%',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
});

export default BankVerifyOTPScreen;
