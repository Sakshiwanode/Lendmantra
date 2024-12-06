import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import Header from '../../../constants/Header';
import { Colors, FontSize } from '../../../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const LoanEmiScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);
  const [selectedCard, setSelectedCard] = useState(null);

  const data = [
    { id: '1', paymentAmount: '$478399', date: '5th Jul. Loan', icon: 'checkmark-circle', status: 'Payment Successful' },
    { id: '2', paymentAmount: '$530000', date: '12th Aug. Loan', icon: 'checkmark-circle', status: 'Payment Successful' },
    // Add more data as needed
  ];

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const handleCardPress = (cardData: any) => {
    setSelectedCard(cardData);
  };

  const renderItem = ({ item }: any) => (
    <TouchableOpacity
      style={[ 
        styles.card,
        { backgroundColor: isDarkMode ? Colors.cardBackgroundDark : Colors.cardBackground }, 
      ]}
      onPress={() => handleCardPress(item)}
    >
      <View style={styles.cardContent}>
        <Ionicons name={item.icon} size={30} color={isDarkMode ? Colors.white : Colors.primary} /> 
        <View style={styles.textContent}>
          <Text style={[styles.boldText, { color: isDarkMode ? Colors.white : Colors.primary }]}>
            {item.status}
          </Text>
          <Text style={{ color: isDarkMode ? Colors.white : Colors.black }}>
            {item.paymentAmount}
          </Text>
        </View>
        <Ionicons name="chevron-forward" size={20} color={isDarkMode ? Colors.white : Colors.primary} />
      </View>
      <Text style={[styles.cardSubText, { color: isDarkMode ? Colors.white : Colors.gray }]}>{item.date}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? Colors.darkBackground : Colors.lightBackground }]}>
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>
      <Text style={styles.heading}>Your Loan EMI</Text>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 60,
  },
  flatList: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  card: {
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    opacity: 0.9,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  textContent: {
    marginLeft: 10,
    flex: 1,
  },
  boldText: {
    fontWeight: 'bold',
    fontSize: FontSize.medium,
  },
  cardSubText: {
    marginTop: 5,
    fontSize: FontSize.small,
  },
});

export default LoanEmiScreen;
