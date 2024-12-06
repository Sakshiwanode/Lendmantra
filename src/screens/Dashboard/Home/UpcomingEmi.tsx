import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import Header from '../../../constants/Header';
import { Colors, FontSize } from '../../../constants/Colors';

const UpcomingEmiScreen = ({ navigation }: any) => {
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
        { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground },
      ]}
    >
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>

      <Text
        style={[
          styles.heading,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}
      >
        Upcoming EMI
      </Text>

      <View
        style={[
          styles.card,
          { backgroundColor: isDarkMode ? Colors.cardBackgroundDark : Colors.cardBackground },
        ]}
      >
        <Text
          style={[
            styles.cardHeading,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}
        >
          Monthly Upcoming EMI
        </Text>

        <Text
          style={[
            styles.amount,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}
        >
          $236,444
        </Text>

        <Text
          style={[
            styles.date,
            { color: isDarkMode ? Colors.white : Colors.black },
          ]}
        >
          12/10/2024
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
    marginTop: 80,
    textAlign: 'center',
  },
  card: {
    marginTop: 20,
    borderRadius: 10,
    padding: 20,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardHeading: {
    fontSize: FontSize.xLarge,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  amount: {
    fontSize: FontSize.headingxxl,
    fontWeight: '600',
    marginBottom: 10,
  },
  date: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
});

export default UpcomingEmiScreen;
