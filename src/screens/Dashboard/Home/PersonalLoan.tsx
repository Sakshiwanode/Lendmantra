import React, { useEffect } from 'react';
import { View, Text, FlatList, useColorScheme, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { isDarkTheme, theme } from '../../../Redux/AuthSlice';
import Header from '../../../constants/Header';
import { Colors, FontSize } from '../../../constants/Colors';

const PersonalLoanScreen = ({ navigation }: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const loanData = [
    { id: 1, title: 'Loan1', loanType: 'Personal Loan', principleRange: '1L - 5L', ROI: '10%', AgeCriteria: '10-20  Years' },
    { id: 2, title: 'Loan2', loanType: 'Home Loan', principleRange: '5L - 50L', ROI: '8%', AgeCriteria: '10-20 Years' },
    { id: 3, title: 'Loan3', loanType: 'Car Loan', principleRange: '1L - 20L', ROI: '12%', AgeCriteria: '10-20  Years' },
  ];

  const renderLoanCard = ({ item }: any) => (
    <View
      style={[
        styles.card,
        { backgroundColor: isDarkMode ? Colors.cardBackgroundDark : Colors.cardBackground },
      ]}
    >
      <Text style={[styles.cardHeading, { color: isDarkMode ? Colors.white : Colors.black }]}>
        {item.loanType}
      </Text>
      <View style={styles.row}>
        <Text style={styles.label}>Principle Range</Text>
        <Text style={styles.label}>ROI</Text>
        <Text style={styles.label}>Age Criteria</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.value}>{item.principleRange}</Text>
        <Text style={styles.value}>{item.ROI}</Text>
        <Text style={styles.value}>{item.AgeCriteria}</Text>
      </View>
    </View>
  );

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
        Personal Loans
      </Text>
      <FlatList
        data={loanData}
        renderItem={renderLoanCard}
        keyExtractor={(item) => item.id.toString()}
     
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
     
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    position: 'absolute',
    top: 9,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
   marginHorizontal:12,
  },
  heading: {
    marginTop:50,
    fontSize:FontSize.heading,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight:'bold',
  },
  listContent: {
    paddingVertical: 16,
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    margin: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  cardHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    flex: 1,
    textAlign: 'center',
  },
  value: {
    fontSize: 14,
    fontWeight: '400',
    flex: 1,
    textAlign: 'center',
  },
});

export default PersonalLoanScreen;
