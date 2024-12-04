import React, { useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../Redux/AuthSlice';
import { Colors, FontSize } from '../../constants/Colors';
import Header from '../../constants/Header';

const BankAccountVerifyScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
      {/* Top Section */}
      <View style={[styles.imageSection]}>
        <Image
          source={require('../../images/Otpverify.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.headerWrapper}>
          <Header navigation={navigation} />
        </View>
      </View>

      <View style={styles.topSection}>
        <Text style={[styles.heading, { color: isDarkMode ? Colors.white : Colors.black }]}>
          Verify your Bank Account via Mobile Number
        </Text>
        <TextInput
          style={[styles.input, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground, color: isDarkMode ? Colors.white : Colors.black }]}
          placeholder="Enter Mobile Number"
          placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
          keyboardType="phone-pad"
        />
        <TouchableOpacity
          style={[styles.proceedButton, { backgroundColor: Colors.primary }]}
          onPress={() => (navigation.navigate('AccountOTPVerify'))} 
        >
          <Text style={styles.proceedButtonText}>Proceed</Text>
        </TouchableOpacity>
      </View>

     {/* Replace Separator */}
<View style={styles.orWrapper}>
  <Text style={[styles.orText, { color: isDarkMode ? Colors.white : Colors.black }]}>OR</Text>
</View>


      {/* Bottom Section */}
      <View style={styles.bottomSection}>
        <Text style={[styles.subHeading, { color: isDarkMode ? Colors.white : Colors.black }]}>
          You can fill your bank details manually also
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('BankDetailForm')}>
          <Text style={[styles.manualFill, { color: Colors.primary }]}>
            Manual Fill
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    position: 'absolute',
    top: 9,
    left: 0,
    right: 0,
  },
  image: {
    width: 400,
    height: 300,
    borderRadius: 10,
  },
  topSection: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: FontSize.heading,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    height: 50,
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: FontSize.medium,
    marginBottom: 20,
  },
  proceedButton: {
    width: '60%',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  proceedButtonText: {
    color: Colors.white,
    fontSize: FontSize.medium,
  },
  orWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  orText: {
    fontSize: FontSize.headingxl,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  subHeading: {
    fontSize: FontSize.xLarge,
    marginBottom: 10,
    textAlign: 'center',
  },
  manualFill: {
    fontSize: FontSize.large,
    textDecorationLine: 'underline',
    marginBottom:90,
  },
});

export default BankAccountVerifyScreen;
