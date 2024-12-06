import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, StyleSheet, useColorScheme } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Dashboard/Home/Home';
import ProfileScreen from '../screens/Dashboard/Profile/Profile';
import ActiveLoanScreen from '../screens/Dashboard/Active loans/ActiveLoan';
import { Colors } from '../constants/Colors';


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === 'dark';

  const themeColors = {
    background: isDarkMode ? Colors.lightBackground : Colors.darkBackground,
    activeTintColor: Colors.blue,
    inactiveTintColor: isDarkMode ? Colors.black : Colors.white,
    wrapperBackground: isDarkMode ? Colors.darkBackground : Colors.lightBackground,
    shadowColor: isDarkMode ? Colors.black : Colors.mediumGray, 
  };

  return (
    <View style={[styles.wrapper, { backgroundColor: themeColors.wrapperBackground }]}>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarStyle: [
            styles.tabBar,
            {
              backgroundColor: themeColors.background,
              shadowColor: themeColors.shadowColor, 
              shadowRadius: 5,
            },
          ],
          tabBarActiveTintColor: themeColors.activeTintColor,
          tabBarInactiveTintColor: themeColors.inactiveTintColor,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="ActiveLoan"
          component={ActiveLoanScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="wallet" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="account-circle"
                color={color}
                size={size}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
};

export default MainTabNavigator;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  tabBar: {
    borderTopLeftRadius: 90,
    borderTopRightRadius: 90,
    borderBottomLeftRadius: 90,
    borderBottomRightRadius: 90,
    elevation: 10, // Add shadow elevation for better visibility
  },
});
