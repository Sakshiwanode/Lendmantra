import React, { useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../Redux/AuthSlice';
import { Colors, FontSize } from '../../constants/Colors';
import Header from '../../constants/Header';

const ESignatureScreen = ({navigation}:any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? Colors.darkBackground
            : Colors.lightBackground,
        },
      ]}
    >
        <View style={styles.headerWrapper}>
          <Header navigation={navigation} />
        </View>
      {/* Heading */}
      <Text
        style={[
          styles.heading,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}
      >
        Your ESignature
      </Text>

      {/* Signature Card */}
      <View
        style={[
          styles.signatureCard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.cardBackground,
          },
        ]}
      >
        <View style={styles.blankSignatureSpace}>
          <Text style={{ color: isDarkMode ? Colors.white : Colors.mediumGray }}>
            Sign here
          </Text>
        </View>
        <TouchableOpacity style={styles.clearTextContainer}>
          <Text
            style={[
              styles.clearText,
              { color: isDarkMode ? Colors.primary : Colors.blue },
            ]}
          >
            Clear
          </Text>
        </TouchableOpacity>
      </View>

      {/* Next Button */}
      <TouchableOpacity
        style={[
          styles.nextButton,
          { backgroundColor: isDarkMode ? Colors.accent : Colors.primary }  ]}
          onPress={() => navigation.navigate('ApplicationSubmit')}
        
      >
        <Text style={styles.nextButtonText}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  headerWrapper: {
    position: 'absolute', 
    top: 9,
    left: 0,
    right: 0,
  },
  heading: {
    marginTop:20,
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  signatureCard: {
    flex: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 4,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  blankSignatureSpace: {
    flex: 1,
    borderWidth: 1,
    borderColor: Colors.mediumGray,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  clearTextContainer: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  clearText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  nextButton: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  nextButtonText: {
    color: Colors.white,
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});

export default ESignatureScreen;
