import React, {useEffect} from 'react';
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

import {Colors, FontSize} from '../../../constants/Colors';
import {isDarkTheme, theme} from '../../../Redux/AuthSlice';

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

  const renderCard = (item: any, backgroundColor: string) => (
    <View
      style={[
        styles.card,
        styles.shadow,
        {backgroundColor},
      ]}>
      <Text
        style={[
          styles.cardText,
          {color: isDarkMode ? Colors.white : Colors.black},
        ]}>
        Card {item.id}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {/* Top Section */}
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

        <View style={[styles.imageCard, styles.shadow]}>
          <Image
            source={require('../../../images/home.jpg')}
            style={styles.smallImage}
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
            style={styles.smallImage}
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

      {/* Bottom Section */}
      <View
        style={[
          styles.bottomSection,
          {
            backgroundColor: isDarkMode
              ? Colors.darkBackground
              : Colors.white,
          },
        ]}>
        <Text
          style={[
            styles.loanTypesHeading,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          Loan Types
        </Text>

        <Text
          style={[
            styles.subHeading,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          Personal Loan
        </Text>
        <FlatList
          data={[{id: '1'}, {id: '2'}, {id: '3'}]} 
          keyExtractor={(item) => item.id}
          horizontal 
          renderItem={({item}) =>
            renderCard(item, isDarkMode ? Colors.black : Colors.lightGray)
          }
          contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 20}}
          showsHorizontalScrollIndicator={false}
        />

        <Text
          style={[
            styles.subHeading,
            {color: isDarkMode ? Colors.white : Colors.black},
          ]}>
          Business Loan
        </Text>
        <FlatList
          data={[{id: '1'}, {id: '2'}, {id: '3'}]} 
          keyExtractor={(item) => item.id}
          horizontal 
          renderItem={({item}) =>
            renderCard(item, isDarkMode ? Colors.black : Colors.lightGray)
          }
          contentContainerStyle={{paddingHorizontal: 10, paddingBottom: 20}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 0.5,
    padding: 16,
  },
  headerIcon:{
    flexDirection: 'row',  
    top:0,
    left:0,
    right:0,bottom:0,}
  ,
  notificationIcon: {
    padding: 8, 
    position: 'absolute',
    top: -2,
    right: 1,
  },
 
  heading: {
    marginTop: 20,
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    alignContent:'center',
    
  },
  subText: {
    fontSize: FontSize.medium,
   marginBottom:10,
    paddingLeft:80,
   
   
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
  smallImage: {
    width: '100%',
    height: 80,
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
    flex: 0.5,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },
  loanTypesHeading: {
    fontSize: FontSize.heading,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subHeading: {
    fontSize: FontSize.medium,
    fontWeight: '600',
    marginBottom: 20,
  },
  card: {
    flex: 1,
    margin: 5,
    padding: 35,
    borderRadius: 8,
  },
  cardText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
