import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {isDarkTheme, theme} from '../../../Redux/AuthSlice';
import {Colors, FontSize} from '../../../constants/Colors';

const ActiveLoanScreen = ({userName = 'UserName'}) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);
  const [activeText, setActiveText] = useState('Loan Detail');
  const [activeLoanType, setActiveLoanType] = useState('Current Loan');

  const textData = ['Loan Detail', 'Loan EMI'];

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  const renderTextItem = ({item}: any) => {
    const isActive = item === activeText;
    return (
      <TouchableOpacity
        onPress={() => setActiveText(item)}
        style={styles.textWrapper}>
        <Text
          style={[
            styles.textItem,
            {
              color: isActive
                ? Colors.blue
                : isDarkMode
                ? Colors.white
                : Colors.black,
            },
          ]}>
          {item}
        </Text>
        {isActive && (
          <View style={[styles.underline, {backgroundColor: Colors.blue}]} />
        )}
      </TouchableOpacity>
    );
  };
  const renderLoanHeader = () => {
    if (activeText === 'Loan Detail' && activeLoanType === 'Current Loan') {
    return (
      <View
        style={[
          styles.headerContainer,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightBackground,
          },
        ]}>
        <Text
          style={[
            styles.headerText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          Loan Type: Home Loan
        </Text>
        <Text
          style={[
            styles.amountText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          Amount: ₹1,500,000
        </Text>
      </View>
    );
  }
  };

  const renderCardDetail = () => {
    if (activeText === 'Loan Detail' && activeLoanType === 'Current Loan') {
      return (
        <View
          style={[
            styles.Topcarddetail,
            {
              backgroundColor: isDarkMode
                ? Colors.darkInputBackground
                : Colors.lightInputBackground,
            },
          ]}>
          <Text style={styles.cardText}>
            Loan details for the current loan are displayed here.
          </Text>
        </View>
      );
    }
  };
  const renderLoanDetails = () => {
    if (activeText === 'Loan Detail' && activeLoanType === 'Current Loan') {
      return (
        <View
          style={[
            styles.infoCardLoan,
            {
              backgroundColor: isDarkMode
                ? Colors.darkInputBackground
                : Colors.lightInputBackground,
            },
          ]}>
          <View style={styles.cardRow}>
            <Text style={styles.cardRowText}>
              <Text
                style={[
                  styles.boldText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                Amount:
              </Text>{' '}
              <Text
                style={[
                  styles.cardText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                $3,000,000
              </Text>
            </Text>
            <Text style={styles.cardRowText}>
              <Text
                style={[
                  styles.boldText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                Duration:
              </Text>{' '}
              <Text
                style={[
                  styles.cardText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                2 years
              </Text>
            </Text>
          </View>

          <View style={styles.cardRow}>
            <Text style={styles.cardRowText}>
              <Text
                style={[
                  styles.boldText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                Monthly Repayment:
              </Text>{' '}
              <Text
                style={[
                  styles.cardText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                $233,334
              </Text>
            </Text>
            <Text style={styles.cardRowText}>
              <Text
                style={[
                  styles.boldText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                Amount Paid:
              </Text>{' '}
              <Text
                style={[
                  styles.cardText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                $2,333
              </Text>
            </Text>
          </View>

          <View style={styles.cardRow}>
            <Text style={styles.cardRowText}>
              <Text
                style={[
                  styles.boldText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                Loan Release Date:
              </Text>{' '}
              <Text
                style={[
                  styles.cardText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                12/11/2023
              </Text>
            </Text>
            <Text style={styles.cardRowText}>
              <Text
                style={[
                  styles.boldText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                Balance:
              </Text>{' '}
              <Text
                style={[
                  styles.cardText,
                  {color: isDarkMode ? Colors.white : Colors.black},
                ]}>
                $234,644
              </Text>
            </Text>
          </View>
        </View>
      );
    } else if (
      activeText === 'Loan Detail' &&
      activeLoanType === 'Upcoming EMI'
    ) {
      return (
        <View
          style={[
            styles.infoCard,
            {
              backgroundColor: isDarkMode
                ? Colors.darkInputBackground
                : Colors.lightInputBackground,
            },
          ]}>
          <Text
            style={[
              styles.cardText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            <Text style={{fontWeight: 'bold'}}>Next EMI:</Text> $500
          </Text>
          <Text
            style={[
              styles.cardText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            <Text style={{fontWeight: 'bold'}}>Due Date:</Text> 12/12/2024
          </Text>
        </View>
      );
    } else if (
      activeText === 'Loan Detail' &&
      activeLoanType === 'EMI Calculator'
    ) {
      return (
        <View
          style={[
            styles.calculatorIcon,
            {
              borderColor: isDarkMode
                ? Colors.blue
                : Colors.lightInputBackground,
            },
          ]}>
          <Ionicons
            name="calculator-outline"
            size={60}
            color={Colors.primary}
          />
        </View>
      );
    }
  };

  const renderProgressBarDetail = () => {
    if (activeText === 'Loan Detail' && activeLoanType === 'Current Loan') {
    return (
      <View
        style={[
          styles.infoCard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkInputBackground
              : Colors.lightInputBackground,
          },
        ]}>
        <Text
          style={[
            styles.cardText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          Loan Progress
        </Text>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBar,
              {
                backgroundColor: Colors.blue,
                width: '70%', 
              },
            ]}
          />
          <View
            style={[
              styles.progressBarBackground,
              {
                backgroundColor: isDarkMode ? Colors.lightGray : Colors.gray,
              },
            ]}
          />
        </View>
        <Text
          style={[
            styles.cardText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          70% Completed
        </Text>
      </View>
    );
  }
  };

  const renderPaymentHistory = () => {
    if (activeText === 'Loan Detail' && activeLoanType === 'Current Loan') {
    return (
      <View
        style={[
          styles.cardContainer,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightBackground,
          },
        ]}>
        <Text
          style={[
            styles.historyHeader,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          Repayment History
        </Text>

        <View style={styles.historyItem}>
          <Text
            style={[
              styles.historyText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Date: 2024-12-01
          </Text>
          <Text
            style={[
              styles.historyText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Amount: ₹50,000
          </Text>
          <Text
            style={[
              styles.historyText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Paid: Yes
          </Text>
        </View>

        <View style={styles.historyItem}>
          <Text
            style={[
              styles.historyText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Date: 2024-11-01
          </Text>
          <Text
            style={[
              styles.historyText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Amount: ₹50,000
          </Text>
          <Text
            style={[
              styles.historyText,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Paid: No
          </Text>
        </View>
      </View>
    );
  }
  };

  const renderLoanEMICard = () => {
    if (activeText === 'Loan EMI') {
      return (
        <View style={styles.loanEMICard}>
          <Text style={styles.userID}>User ID: {userName}</Text>

          <View style={styles.emiRow}>
            <Text style={styles.boldText}>Date</Text>
            <Text style={styles.boldText}>Principal</Text>
            <Text style={styles.boldText}>Interest</Text>
            <Text style={styles.boldText}>Balance</Text>
          </View>
          {[
            '01/12/2023',
            '02/12/2023',
            '03/12/2023',
            '04/12/2023',
            '05/12/2023',
          ].map((date, index) => (
            <View style={styles.emiRow} key={index}>
              <Text style={styles.cardText}>{date}</Text>
              <Text style={styles.cardText}>$10,000</Text>
              <Text style={styles.cardText}>$500</Text>
              <Text style={styles.cardText}>$9,500</Text>
            </View>
          ))}
        </View>
      );
    }
  };

  const renderLoanButtons = () => {
    if (activeText === 'Loan Detail') {
      return (
        <FlatList
          horizontal
          data={['Current Loan', 'Upcoming EMI', 'EMI Calculator']}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.loanButton,
                activeLoanType === item && styles.activeLoanButton,
              ]}
              onPress={() => setActiveLoanType(item)}>
              <Text
                style={[
                  styles.loanButtonText,
                  activeLoanType === item && styles.activeLoanButtonText,
                ]}>
                {item}
              </Text>
            </TouchableOpacity>
          )}
          contentContainerStyle={styles.buttonContainer}
          showsHorizontalScrollIndicator={false}
        />
      );
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode
            ? Colors.darkBackground
            : Colors.lightGray,
        },
      ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={[
          styles.topSection,
          {backgroundColor: isDarkMode ? Colors.blue : Colors.blue},
        ]}>
        <Text
          style={[
            styles.heading,
            {color: isDarkMode ? Colors.white : Colors.white},
          ]}>
          Welcome {userName}
        </Text>
        <Ionicons
          name="notifications-outline"
          size={24}
          color={isDarkMode ? Colors.white : Colors.black}
          style={styles.notificationIcon}
        />
      </View>
      <Text
        style={[
          styles.subText,
          {color: isDarkMode ? Colors.lightGray : Colors.mediumGray},
        ]}>
        Lorem ipsum dolor sit amet.
      </Text>

      <View
        style={[
          styles.bottomSection,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightBackground,
          },
        ]}>
        <FlatList
          horizontal
          data={textData}
          keyExtractor={item => item}
          renderItem={renderTextItem}
          contentContainerStyle={styles.textContainer}
          showsHorizontalScrollIndicator={false}
        />
        {renderLoanHeader()}
        {renderLoanButtons()}
        {renderLoanDetails()}
        {renderProgressBarDetail()}
       

       
        {renderLoanEMICard()}
        {renderPaymentHistory()}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    paddingHorizontal: 0,
  },
  topSection: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  heading: {
    fontSize: FontSize.xLarge,
    fontWeight: 'bold',
    paddingLeft: 20,
    paddingTop: 30,
  },
  notificationIcon: {
    marginRight: 8,
    paddingTop: 35,
  },
  subText: {
    bottom: 20,
    paddingLeft: 20,
    fontSize: FontSize.medium,
  },
  bottomSection: {
    flex: 0.9,
  },
  textContainer: {
    marginTop: -15,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  textWrapper: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  textItem: {
    fontSize: FontSize.xLarge,
    marginBottom: 4,
    paddingLeft: 20,
    paddingRight: 70,
  },
  underline: {
    height: 2,
    width: '100%',
  },

  loanButton: {
    padding: 12,
    borderRadius: 25,
    marginRight: 15,
    backgroundColor: Colors.lightGray,
    alignItems: 'center',
  },
  activeLoanButton: {
    backgroundColor: Colors.blue,
  },
  loanButtonText: {
    color: Colors.black,
    fontSize: FontSize.medium,
  },
  activeLoanButtonText: {
    color: Colors.white,
  },

  Topcarddetail: {
    padding: 19,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Colors.lightInputBackground,
  },

  buttonContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  infoCardLoan: {
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Colors.lightInputBackground,
  },
  infoCard: {
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Colors.lightInputBackground,
  },
  calculatorIcon: {
    alignSelf: 'center',
    borderRadius: 25,
    padding: 16,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: Colors.lightGray,
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  cardText: {
    fontSize: FontSize.medium,
    marginVertical: 0,
    marginLeft: 3,
    marginRight: 3,
  },
  boldText: {
    fontWeight: 'bold',
    paddingLeft: 25,
    paddingRight: 0,
    paddingHorizontal: 17,
  },
  cardRowText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  loanEMICard: {
    marginBottom: 390,
    padding: 16,
    backgroundColor: '#FFF',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
    elevation: 4,
    paddingVertical: 12,
    marginHorizontal: 12,
  },
  userID: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },

  emiRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  progressBarContainer: {
    height: 10,
    flexDirection: 'row',
    marginTop: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 5,
  },
  progressBarBackground: {
    flex: 1,
    height: '100%',
    borderRadius: 5,
    marginLeft: -10,
  },


  headerContainer: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerText: {
    paddingLeft: 80,
    fontSize: 20,
    fontWeight: 'bold',
  },
  amountText: {
    paddingLeft: 100,
    fontSize: 18,
    marginTop: 5,
  },

  cardContainer: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 5},
    elevation: 5,
    marginVertical:20,
    marginHorizontal:20,
  },
  historyHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  historyItem: {
    marginBottom: 10,
  },
  historyText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default ActiveLoanScreen;
