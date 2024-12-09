import React, {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  useColorScheme,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {isDarkTheme, theme} from '../../../Redux/AuthSlice';
import {Colors, FontSize} from '../../../constants/Colors';
import Header from '../../../constants/Header';
import * as Progress from 'react-native-progress';

const YourLoanScreen = ({navigation}: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const horizontalCards = [
    {id: '1', name: 'Loan EMI', screen: 'LoanEMI'},
    {id: '2', name: 'Repayment Progress', screen: 'RepaymentProgress'},
    {id: '3', name: 'Calculate EMI', screen: 'EMICalculator'},
  ];

  const renderHorizontalCard = ({item}: any) => (
    <TouchableOpacity
      style={[
        styles.smallCard,
        {
          backgroundColor: isDarkMode
            ? Colors.darkInputBackground
            : Colors.cardBackground,
        },
      ]}
      onPress={() => navigation.navigate(item.screen)}>
      <Text
        style={[
          styles.smallCardText,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  const progress = 0.6;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? Colors.darkBackground
            : Colors.lightBackground,
        },
      ]}>
      <View style={styles.headerWrapper}>
        <Header navigation={navigation} />
      </View>

      {/* Heading above the card */}
      <Text
        style={[
          styles.loanIdHeading,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        PFL-PL/22/PDL/0000001
      </Text>

      <View
        style={[
          styles.card,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.cardBackground,
          },
        ]}>
       
          <Progress.Circle
            progress={progress}
            size={200}
            thickness={8}
            color={Colors.primary}
            unfilledColor={Colors.gray}
            borderWidth={0}
          />

          <Text
            style={[
              styles.heading,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Loan Amount
          </Text>
          <Text
            style={[
              styles.headingsub,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            $3,455,677
          </Text>
       

        <View style={styles.row}>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Monthly Repayment: $230,000
          </Text>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Balance: $345,566
          </Text>
        </View>
      </View>

      {/* Horizontal Cards */}
      <FlatList
        data={horizontalCards}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderHorizontalCard}
        contentContainerStyle={styles.horizontalList}
      />

      {/* Repayment History Section */}
      <Text
        style={[
          styles.sectionHeading,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        Repayment History
      </Text>
      <View
        style={[
          styles.Paymentcard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.cardBackground,
          },
        ]}>
        <Text
          style={[
            styles.historyText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          March Repayment
        </Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Date: 23/12/2024
          </Text>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Amount: $3,445,557
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.Paymentcard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.cardBackground,
          },
        ]}>
        <Text
          style={[
            styles.historyText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          March Repayment
        </Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Date: 23/12/2024
          </Text>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Amount: $3,445,557
          </Text>
        </View>
      </View>
      <View
        style={[
          styles.Paymentcard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.cardBackground,
          },
        ]}>
        <Text
          style={[
            styles.historyText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          March Repayment
        </Text>
        <View style={styles.row}>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Date: 23/12/2024
          </Text>
          <Text
            style={[
              styles.rowText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Amount: $3,445,557
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal:15,
  },
  loanIdHeading: {
    marginTop: 30,
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    borderRadius: 8,
    padding: 4,
    marginBottom: 10,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  progress: {
    alignSelf: 'center',
    marginTop:30,
  },
  Paymentcard: {
    borderRadius: 8,
    padding: 16,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
    marginBottom: 20,
  },
  heading: {
    bottom: 130,
    fontSize: FontSize.large,
    textAlign: 'center',
    marginBottom: 0,
  },
  headingsub: {
    alignSelf: 'center',
    bottom: 130,
    fontWeight: 'bold',
    fontSize: FontSize.heading,
  },

  row: {
    marginBottom:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowText: {
    marginTop:-40,
    fontSize: FontSize.medium,
    paddingRight:20,
  },
  horizontalList: {
    marginBottom: 16,
  },
  smallCard: {
    marginTop:15,
    width: 120,
    height: 100,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    shadowColor: Colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  smallCardText: {
    fontSize: FontSize.medium,
    textAlign: 'center',
  },
  sectionHeading: {
    fontSize: FontSize.large,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyText: {
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerWrapper: {
    position: 'absolute',
    top: 9,
    left: 0,
    right: 0,
  },
});
export default YourLoanScreen;
