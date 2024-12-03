import React, { useEffect } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import { Colors, FontSize } from '../../../constants/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const user = {
    name: 'John Doe',
    age: 28,
    dob: '1995-05-10',
    aadhaar: '1234-5678-9012',
    pan: 'ABCDE1234F',
    mobile: '+91-9876543210',
    address: '123, Green Street, Springfield, USA',
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
      <View style={[styles.card, { backgroundColor: isDarkMode ? Colors.darkInputBackground : Colors.cardBackground }]}>
        <View style={styles.profileIconWrapper}>
          <Icon name="person" size={80} color={Colors.white} style={styles.profileIcon} />
        </View>
        <Text style={[styles.name, { color: isDarkMode ? Colors.white : Colors.black }]}>{user.name}</Text>
        <View style={styles.detailWrapper}>
          <Text style={[styles.detail, { color: isDarkMode ? Colors.white : Colors.black }]}>
            <Text style={styles.label}>Age:</Text> {user.age}
          </Text>
          <Text style={[styles.detail, { color: isDarkMode ? Colors.white : Colors.black }]}>
            <Text style={styles.label}>DOB:</Text> {user.dob}
          </Text>
          <Text style={[styles.detail, { color: isDarkMode ? Colors.white : Colors.black }]}>
            <Text style={styles.label}>Aadhaar:</Text> {user.aadhaar}
          </Text>
          <Text style={[styles.detail, { color: isDarkMode ? Colors.white : Colors.black }]}>
            <Text style={styles.label}>PAN:</Text> {user.pan}
          </Text>
          <Text style={[styles.detail, { color: isDarkMode ? Colors.white : Colors.black }]}>
            <Text style={styles.label}>Mobile:</Text> {user.mobile}
          </Text>
          <Text style={[styles.detail, { color: isDarkMode ? Colors.white : Colors.black }]}>
            <Text style={styles.label}>Address:</Text> {user.address}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  profileIconWrapper: {
    backgroundColor: Colors.primary,
    width: 120,
    height: 120,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  profileIcon: {
    borderRadius: 60,
  },
  name: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  detailWrapper: {
    width: '100%',
    marginTop: 10,
  },
  detail: {
    fontSize: FontSize.medium,
    marginVertical: 5,
  },
  label: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
