import { View, Text, TextInput, TouchableOpacity, StyleSheet, useColorScheme } from 'react-native';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../Redux/AuthSlice';
import { Colors, FontSize } from '../../constants/Colors';
import Header from '../../constants/Header';

const BankDetailFormScreen = ({ navigation }: any) => {
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
      <View style={styles.wrapper}>
        <Text style={[styles.heading, { color: isDarkMode ? Colors.primary : Colors.primary }]}>Bank Information Form</Text>

        <Text style={[styles.label, { color: isDarkMode ? Colors.white : Colors.black }]}>Bank Name</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: isDarkMode ? Colors.primary : Colors.gray,
              backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground,
            },
          ]}
          placeholder="Enter Bank Name"
          placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
        />

        <Text style={[styles.label, { color: isDarkMode ? Colors.white : Colors.black }]}>Account Holder Name</Text>
        <View style={styles.row}>
          <TextInput
            style={[
              styles.inputRow,
              {
                borderColor: isDarkMode ? Colors.primary : Colors.gray,
                backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground,
              },
            ]}
            placeholder="First Name"
            placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
          />
          <TextInput
            style={[
              styles.inputRow,
              {
                borderColor: isDarkMode ? Colors.primary : Colors.gray,
                backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground,
              },
            ]}
            placeholder="Last Name"
            placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
          />
        </View>

        <Text style={[styles.label, { color: isDarkMode ? Colors.white : Colors.black }]}>Account Number</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: isDarkMode ? Colors.primary : Colors.gray,
              backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground,
            },
          ]}
          placeholder="Enter Account Number"
          placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
          keyboardType="numeric"
        />

        <Text style={[styles.label, { color: isDarkMode ? Colors.white : Colors.black }]}>IFSC Code</Text>
        <TextInput
          style={[
            styles.input,
            {
              borderColor: isDarkMode ? Colors.primary : Colors.gray,
              backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground,
            },
          ]}
          placeholder="Enter IFSC Code"
          placeholderTextColor={isDarkMode ? Colors.placeholderDark : Colors.placeholderLight}
        />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: isDarkMode ? Colors.primary : Colors.primary }]}
          onPress={() => navigation.navigate('BankDetail')}
        >
          <Text style={[styles.buttonText, { color: Colors.white }]}>Proceed</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerWrapper: {
    position: 'absolute', 
    top: 11,
    left: 0,
    right: 0,
  },
  wrapper: {
    width: '90%',
    alignItems: 'stretch',
  },
  heading: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    fontSize: FontSize.medium,
    marginBottom: 8,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: FontSize.medium,
    marginBottom: 15,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  inputRow: {
    width: '48%',
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: FontSize.medium,
  },
  button: {
    marginTop: 20,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
});

export default BankDetailFormScreen;
