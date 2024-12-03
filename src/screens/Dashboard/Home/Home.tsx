import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import {theme, isDarkTheme} from '../../../Redux/AuthSlice';

import {Colors, FontSize} from '../../../constants/Colors';

const HomeScreen = ({userName = 'UserName', navigation}: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

  const [selectedButton, setSelectedButton] = useState('Current Loan');

  const buttons = [
    {id: 1, name: 'Current Loan'},
    {id: 2, name: 'Upcoming EMI'},
    {id: 3, name: 'EMI Calculator'},
  ];

  useEffect(() => {
    dispatch(theme(systemColorScheme));
  }, [systemColorScheme, dispatch]);

  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => {
        BackHandler.exitApp();
        return true;
      },
    );
    return () => backHandler.remove();
  }, []);

  const renderCard = (type: any) => {
    if (type === 'Current Loan') {
      return (
        <View>
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
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  Amount:
                </Text>{' '}
                <Text
                  style={[
                    styles.cardText,
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  $3,000,000
                </Text>
              </Text>
              <Text style={styles.cardRowText}>
                <Text
                  style={[
                    styles.boldText,
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  Duration:
                </Text>{' '}
                <Text
                  style={[
                    styles.cardText,
                    { color: isDarkMode ? Colors.white : Colors.black },
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
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  Monthly Repayment:
                </Text>{' '}
                <Text
                  style={[
                    styles.cardText,
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  $233,334
                </Text>
              </Text>
              <Text style={styles.cardRowText}>
                <Text
                  style={[
                    styles.boldText,
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  Amount Paid:
                </Text>{' '}
                <Text
                  style={[
                    styles.cardText,
                    { color: isDarkMode ? Colors.white : Colors.black },
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
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  Loan Release Date:
                </Text>{' '}
                <Text
                  style={[
                    styles.cardText,
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  12/11/2023
                </Text>
              </Text>
              <Text style={styles.cardRowText}>
                <Text
                  style={[
                    styles.boldText,
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  Balance:
                </Text>{' '}
                <Text
                  style={[
                    styles.cardText,
                    { color: isDarkMode ? Colors.white : Colors.black },
                  ]}>
                  $234,644
                </Text>
              </Text>
            </View>
          </View>
        </View>
      );
    } else if (type === 'Upcoming EMI') {
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
    }
    else if (type === 'EMI Calculator') {
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

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* Top Section */}
      <View
        style={[
          styles.topSection,
          {backgroundColor: isDarkMode ? Colors.black : Colors.white},
        ]}>
        <View style={styles.header}>
          <Text
            style={[
              styles.heading,
              {color: isDarkMode ? Colors.white : Colors.black},
            ]}>
            Welcome {userName}
          </Text>
          <Ionicons
            name="notifications-outline"
            size={24}
            color={Colors.primary}
            style={{paddingTop: 20}}
          />
        </View>
        <Text
          style={[
            styles.subText,
            {color: isDarkMode ? Colors.mediumGray : Colors.darkGray},
          ]}>
          Lorem ipsum dolor sit amet.
        </Text>
        <View style={[styles.imageCard, styles.shadow]}>
          <Image
            source={require('../../../images/home.jpg')}
            style={styles.image}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text
              style={styles.applyButtonText}
              onPress={() => navigation.navigate('ApplyNewLoan')}>
              Apply Personal Loan
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.imageCard, styles.shadow]}>
          <Image
            source={require('../../../images/home.jpg')}
            style={styles.image}
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text
              style={styles.applyButtonText}
              onPress={() => navigation.navigate('ApplyNewLoan')}>
              Apply Business Loan
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={[
          styles.bottomSection,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightGray,
          },
        ]}>
       
        <FlatList
          data={buttons}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id.toString()}
          contentContainerStyle={styles.buttonList}
          renderItem={({item}) => (
            <TouchableOpacity
              style={[
                styles.roundedButton,
                {
                  backgroundColor:
                    selectedButton === item.name
                      ? Colors.primary
                      : isDarkMode
                      ? Colors.darkGray
                      : Colors.lightGray,
                  shadowColor: isDarkMode ? Colors.white : Colors.black,
                },
              ]}
              onPress={() => setSelectedButton(item.name)}>
              <Text
                style={[
                  styles.buttonText,
                  {
                    color:
                      selectedButton === item.name
                        ? Colors.white
                        : isDarkMode
                        ? Colors.white
                        : Colors.black,
                  },
                ]}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />

        <View style={styles.dynamicContent}>{renderCard(selectedButton)}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.6,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    marginTop: 20,
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: FontSize.medium,
    marginVertical: 8,
    paddingBottom: 10,
  },
  imageCard: {
    alignItems: 'center',
    marginTop: 16,
    borderRadius: 10,
    overflow: 'hidden',
  },
  shadow: {
    shadowColor: Colors.black,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: '100%',
    height: 120,
  },
  applyButton: {
    backgroundColor: Colors.primary,
    padding: 8,
    width: '100%',
    alignItems: 'center',
  },
  applyButtonText: {
    color: Colors.white,
    fontWeight: 'bold',
  },
  bottomSection: {
    flex: 0.4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    backgroundColor: Colors.white,
    marginTop: -10,
  },
  buttonList: {
    alignContent: 'flex-start',
    alignItems: 'flex-start',
  },
  roundedButton: {
    marginHorizontal: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    backgroundColor: Colors.primary,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    color: Colors.white,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  dynamicContent: {},
  cardRow: {
    flexDirection: 'row',
    justifyContent:'space-between',
    marginBottom: 15,
  },

  boldText: {
    fontWeight: 'bold',
  },
  cardRowText: {
    flexDirection: 'row',
    alignItems: 'center',
   
  },
  
  cardText: {
    fontSize: FontSize.medium,
    marginVertical: 0,
    marginLeft:3,
    marginRight:3,
  },
  infoCardLoan: {
    marginTop: 10,
    padding: 16,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    
  },
  infoCard: {
    marginTop: 10,
    padding: 16,
    borderRadius: 10,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
   
  },

  calculatorIcon: {
    alignSelf: 'center',
    borderRadius: 25,
    backgroundColor: Colors.lightGray,
    padding: 30,
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
   
    borderWidth: 1,
  },
});

export default HomeScreen;
