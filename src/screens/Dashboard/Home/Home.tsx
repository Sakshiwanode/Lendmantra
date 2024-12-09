import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  BackHandler,
  StatusBar,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {useColorScheme} from 'react-native';
import {isDarkTheme, theme} from '../../../Redux/AuthSlice';
import {Colors, FontSize} from '../../../constants/Colors';
import * as Progress from 'react-native-progress';

const HomeScreen = ({userName = 'UserName', navigation}: any) => {
  const dispatch = useDispatch();
  const systemColorScheme = useColorScheme();
  const isDarkMode = useSelector(isDarkTheme);

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

  const loanDraws = [
    {
      id: '1',
      name: 'Personal Loan',
      status: 'Approved',
      duration: '12 Months',
      progress: 75,
    },
    {
      id: '2',
      name: 'Car Loan',
      status: 'Pending',
      duration: '6 Months',
      progress: 50,
    },
    {
      id: '3',
      name: 'Home Loan',
      status: 'Rejected',
      duration: '24 Months',
      progress: 30,
    },
  ];
  const renderLoanDrawsCard = ({ item }: any) => {
   
    const filledColor =
      item.progress >= 75
        ? Colors.blue
        : item.progress >= 50
        ? Colors.blue
        : Colors.blue;
  
    const unfilledColor =
      item.progress >= 30
        ? Colors.gray
        : Colors.accent; 
  
    return (
      <View
        style={[
          styles.loanDrawCard,
          {
            backgroundColor: isDarkMode
              ? Colors.cardBackgroundDark
              : Colors.cardBackground,
          },
        ]}
      >
        <View
          style={{
            width: 80,
            height: 80,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Progress.Circle
            progress={item.progress / 100} 
            size={80}
            thickness={5}
            color={filledColor}
            unfilledColor={unfilledColor}
            borderWidth={0}
          />
          <Text style={styles.progressText}>{`${item.progress}%`}</Text>
        </View>
  
        <View style={styles.loanDetails}>
          <Text
            style={[
              styles.boldText,
              { color: isDarkMode ? Colors.white : Colors.black },
            ]}
          >
            {item.name}
          </Text>
          <Text
            style={[
              styles.loanStatusText,
              { color: isDarkMode ? Colors.white : Colors.black },
            ]}
          >
            {item.status}
          </Text>
          <Text
            style={[
              styles.loanDurationText,
              { color: isDarkMode ? Colors.white : Colors.black },
            ]}
          >
            {item.duration}
          </Text>
        </View>
      </View>
    );
  };
  
  const renderProgressBarDetail = () => {
    return (
      <View
        style={[
          styles.infoCard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightBackground,
          },
        ]}>
        <Text
          style={[
            styles.cardText,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
        Applied Loan Progress Status
        </Text>
        <View style={styles.progressBarContainer}>
          <View
            style={[
              styles.progressBarBackground,
              {
                backgroundColor: isDarkMode ? Colors.lightGray : Colors.gray,
              },
            ]}
          />
          <View
            style={[
              styles.progressBar,
              {
                backgroundColor: Colors.blue,
                width: '70%',
              },
            ]}
          />
        </View>
        <Text
          style={[
            styles.cardTextProgress,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          70% Completed
        </Text>
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: isDarkMode ? '#292929' : '#EDEDED'},
      ]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View
        style={[
          styles.topSection,
          {backgroundColor: isDarkMode ? Colors.black : Colors.white},
        ]}>
        <View style={styles.headerIcon}>
          <Ionicons
            name="menu-outline"
            size={28}
            color={Colors.primary}
            onPress={() => navigation.toggleDrawer()}
          />
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
            style={styles.notificationIcon}
          />
        </View>
        <Text
          style={[
            styles.subText,
            {color: isDarkMode ? Colors.mediumGray : Colors.darkGray},
          ]}>
          Lorem ipsum dolor sit amet.
        </Text>
      </View>

      {/* Loan Cards */}
      <View
  style={[
    styles.card,
    {
      backgroundColor: isDarkMode
        ? Colors.cardBackgroundDark
        : Colors.cardBackground,
    },
  ]}
>
  <View style={styles.row}>
    {/* Personal Loan Icon */}
    <View style={styles.iconContainer}>
      <TouchableOpacity
        style={[
          styles.smallCard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightBackground,
          },
        ]}
        onPress={()=>navigation.navigate('PersonalLoan')}
      >
        <Ionicons name="cash-outline"size={30} color={isDarkMode ? Colors.blue : Colors.blue} />
      </TouchableOpacity>
      <Text
        style={[
          styles.iconText,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}
      >
        Personal Loan
      </Text>
    </View>

    {/* Business Loan Icon */}
    <View style={styles.iconContainer}>
      <TouchableOpacity
        style={[
          styles.smallCard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightBackground,
          },
        ]}
        onPress={()=>navigation.navigate('BusinessLoan')}
      >
        <Ionicons name="business-outline" size={30} color={isDarkMode ?  Colors.blue : Colors.blue} />
      </TouchableOpacity>
      <Text
        style={[
          styles.iconText,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}
      >
        Business Loan
      </Text>
    </View>

   
    <View style={styles.iconContainer}>
      <TouchableOpacity
        style={[
          styles.smallCard,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.lightBackground,
          },
        ]}
        onPress={() => navigation.navigate('ApplyNewLoan')}
      >
        <Ionicons name="send-outline" size={30} color={isDarkMode ? Colors.blue : Colors.blue} />
      </TouchableOpacity>
      <Text
        style={[
          styles.iconText,
          { color: isDarkMode ? Colors.white : Colors.black },
        ]}
      >
        Apply Now
      </Text>
    </View>
  </View>
</View>

      {/* Loan Progress Bar */}
      {renderProgressBarDetail()}

      {/* Loan Draws */}
      <Text
        style={[
          styles.subHeading,
          {color: isDarkMode ? Colors.white : Colors.darkBackground},
        ]}>
        Your Active Draws
      </Text>

      <FlatList
        data={loanDraws}
        renderItem={renderLoanDrawsCard}
        keyExtractor={(item: any) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.loanDrawsList}
      />

      {/* Other Details */}
      <Text
        style={[
          styles.subHeading,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        Other Details
      </Text>
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: isDarkMode
              ? Colors.cardBackgroundDark
              : Colors.cardBackground,
          },
        ]}
        onPress={() => navigation.navigate('LoanEMI')}>
        <View style={styles.rows}>
          <Ionicons
            name="time-outline"
            size={30}
            color={Colors.primary}
            style={styles.iconLeftclock}
          />
          <View style={styles.quickActionText}>
            <Text
              style={[
                styles.boldText,
                {color: isDarkMode ? Colors.white : Colors.black},
              ]}>
              Repayment History
            </Text>
            <Text style={[{color: isDarkMode ? Colors.white : Colors.black}]}>
              View all transactions
            </Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={Colors.primary}
          />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: isDarkMode
              ? Colors.cardBackgroundDark
              : Colors.cardBackground,
          },
        ]}
        onPress={() => navigation.navigate('ClosedLoan')}>
        <View style={styles.rows}>
          <Ionicons
            name="checkmark-circle"
            size={35}
            color={Colors.primary}
            style={styles.iconLeft}
          />
          <View style={styles.quickActionText}>
            <Text
              style={[
                styles.boldText,
                {color: isDarkMode ? Colors.white : Colors.black},
              ]}>
              Closed Loans
            </Text>
            <Text style={[{color: isDarkMode ? Colors.white : Colors.black}]}>
              View Closed Loans
            </Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={Colors.primary}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.card,
          {
            backgroundColor: isDarkMode
              ? Colors.cardBackgroundDark
              : Colors.cardBackground,
          },
        ]}
        onPress={() => navigation.navigate('UpcomingEmi')}>
        <View style={styles.rows}>
          <Ionicons
            name="hand-left"
            size={30}
            color={Colors.primary}
            style={styles.iconLeft}
          />
          <View style={styles.quickActionText}>
            <Text
              style={[
                styles.boldText,
                {color: isDarkMode ? Colors.white : Colors.black},
              ]}>
              Upcoming EMi
            </Text>
            <Text style={[{color: isDarkMode ? Colors.white : Colors.black}]}>
              View Upcoming EMi
            </Text>
          </View>
          <Ionicons
            name="chevron-forward-outline"
            size={24}
            color={Colors.primary}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    padding: 10,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerIcon: {
    flexDirection: 'row',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  notificationIcon: {
    padding: 8,
    position: 'absolute',
    top: -2,
    right: 1,
  },

  heading: {
    marginTop: 25,
    paddingLeft: 80,
    fontSize: FontSize.large,
    fontWeight: 'bold',
    alignContent: 'center',
  },
  subText: {
    fontSize: FontSize.medium,
    marginBottom: 1,
    paddingLeft: 90,
  },
  Progresscircle:{
    top:10,

  },
  card: {
    padding: 5,
    paddingBottom: 10,
    margin: 1,
    borderRadius: 8,
    backgroundColor: Colors.cardBackground,
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 13,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  iconContainer: {
    alignItems: 'center',
    margin: 10,
  },
  iconText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  smallCard: {
    padding: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subHeading: {
    marginBottom: 20,
    paddingLeft: 20,
    fontSize: FontSize.large,
    fontWeight: 'bold',
  },
  onTrackText: {
    marginTop: 5,
    fontSize: FontSize.small,
  },
  loanDrawCard: {
    padding: 16,
    margin: 5,
    borderRadius: 8,
    backgroundColor: Colors.cardBackground,
    alignItems: 'center',
    height: 180,
   
   
  },

  boldText: {
    fontWeight: 'bold',
    fontSize: FontSize.medium,
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
  
  },
  loanStatusText: {
    fontSize: FontSize.small,
  },
  loanDurationText: {
    fontSize: FontSize.small,
  },
  quickActionText: {
    marginLeft: -8,
  },
  infoCard: {
    padding: 3,
    margin: 1,
    borderRadius: 8,
    backgroundColor: Colors.cardBackground,
    alignItems: 'center',
    marginVertical: 15,
    marginHorizontal: 13,
  },
  progressBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    height: 10,
    marginTop: 5,
  },
  progressBar: {
    height: 10,
    borderRadius: 5,
  },
  progressBarBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 10,
    borderRadius: 5,
  },

  cardText: {
    paddingRight:170,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
  },
  cardTextProgress:{
paddingLeft:250,
fontWeight: 'bold',
  },
  iconLeftclock: {
    paddingRight: 100,
  },
  iconLeft: {
    paddingRight: 110,
  },
  loanDrawsList: {
    paddingHorizontal: 10,
  },
  rows: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressText: {
    bottom:50,
    fontSize: FontSize.medium,
    fontWeight: 'bold',
    color: Colors.blue,
  },
  loanDetails: {
    marginTop: 10,
    alignItems: 'center',
  },
});

export default HomeScreen;
