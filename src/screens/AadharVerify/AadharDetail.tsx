import React, { useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, useColorScheme } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { isDarkTheme, theme } from '../../Redux/AuthSlice';
import { Colors } from '../../constants/Colors';
import Header from '../../constants/Header';

const UserDetailScreen = ({ navigation }: any) => {
  

  const colorScheme = useColorScheme();
  const dispatch = useDispatch();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(colorScheme)); 
  }, [colorScheme, dispatch]);

  const user = {
    name: "Sakshi Wanode",
    phone: "+91 223 344 4454",
    email: "johndoe@example.com",
    dob: "12/1/2000", 
    aadharOrPan: "Aadhar: 1234 5678 9123",
    address: "123, Main Street, City XYZ, Country ABC",
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>
      <View style={[styles.topSection]}>
        <Text style={[styles.heading, { color: isDarkMode ? Colors.primary : Colors.primary }]}>Aadhar Verified Details</Text>
      </View>

      <View style={[styles.infoSection, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.lightInputBackground }]}>
        <Text style={[styles.userName, { color: isDarkMode ? Colors.primary : Colors.primary }]}>{user.name}</Text>
        <Text style={[styles.phoneNumber, { color: isDarkMode ? Colors.primary : Colors.primary }]}>{user.phone}</Text>

        <View style={styles.detailsSection}>
          <Text style={[styles.detailsLabel, { color: isDarkMode ? Colors.primary : Colors.primary }]}>Email Address:</Text>
          <Text style={[styles.detailsText, { color: isDarkMode ? Colors.lightGray : Colors.gray }]}>{user.email}</Text>

          {/* Added Date of Birth */}
          <Text style={[styles.detailsLabel, { color: isDarkMode ? Colors.primary : Colors.primary }]}>Date of Birth:</Text>
          <Text style={[styles.detailsText, { color: isDarkMode ? Colors.lightGray : Colors.gray }]}>{user.dob}</Text>

          <Text style={[styles.detailsLabel, { color: isDarkMode ? Colors.primary : Colors.primary }]}>Aadhar/PAN Number:</Text>
          <Text style={[styles.detailsText, { color: isDarkMode ? Colors.lightGray : Colors.gray }]}>{user.aadharOrPan}</Text>

          {/* Added Address */}
          <Text style={[styles.detailsLabel, { color: isDarkMode ? Colors.primary : Colors.primary }]}>Address:</Text>
          <Text style={[styles.detailsText, { color: isDarkMode ? Colors.lightGray : Colors.gray }]}>{user.address}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={[styles.backButton, { backgroundColor: isDarkMode ? Colors.black : Colors.primary, borderColor: isDarkMode ? Colors.blue : Colors.gray }]}
        onPress={() => { navigation.navigate('BankAccountVerify') }}
      >
        <Text style={[styles.backButtonText, { color: Colors.white }]}>Forward</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 30, 
    position: 'relative', 
  },
  backIcon: {
    position: 'absolute', 
    left: 0,
    marginTop: -70,
  },
  headerWrapper: {
    position: 'absolute', 
    top: 11,
    left: 0,
    right: 0,
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, 
    marginTop: 90,
  },
  infoSection: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderRadius: 20,
    marginHorizontal: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  phoneNumber: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsSection: {
    marginTop: 20,
    borderRadius: 15,
    padding: 15,
  },
  detailsLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 15,
  },
  backButton: {
    marginTop: 30,
    paddingVertical: 15,
    borderRadius: 10,
    marginHorizontal: 18,
    alignItems: 'center',
    borderWidth:1,
  },
  backButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UserDetailScreen;
