import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../Auth/Login';
import OTPScreen from '../screens/MobileOTPVerify/OTPVerify';
import AadharScreen from '../screens/AadharVerify/AadharVerify';
import AadharOTPScreen from '../screens/AadharVerify/AadharOTP';
import UserDetailScreen from '../screens/AadharVerify/AadharDetail';
import BankAccountVerifyScreen from '../screens/BankAccountDetails/AccountVerify';
import BankVerifyOTPScreen from '../screens/BankAccountDetails/AccountOTPVerify';
import BankDetailScreen from '../screens/BankAccountDetails/BankDetail';
import BankDetailFormScreen from '../screens/BankAccountDetails/BankDetailForm';
import DocumentBankScreen from '../screens/Upload Documents/DocumentBank';
import ApplicationSubmit from '../screens/ApplicationCreated/ApplicationSubmit';
import MainTabNavigator from './TabNavigator';
import ApplyNewLoanScreen from '../screens/Dashboard/Home/ApplyNewLoan';
import LoanApplyScreen from '../screens/Loan Apply/LoanApply';
import ESignatureScreen from '../screens/Upload Documents/ESignature';



const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   
      <Stack.Navigator>
      <Stack.Screen 
          name="login"
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="OTPVerify"
          component={OTPScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="LoanApply"
          component={LoanApplyScreen} 
          options={{ headerShown: false }} 
        />
          
         <Stack.Screen 
          name="AadharNoVerify"
          component={AadharScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="AadharOTP"
          component={AadharOTPScreen} 
          options={{ headerShown: false }} 
        />
<Stack.Screen 
          name="UserDetail"
          component={UserDetailScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BankAccountVerify"
          component={BankAccountVerifyScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="AccountOTPVerify"
          component={BankVerifyOTPScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="BankDetail"
          component={BankDetailScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="BankDetailForm"
          component={BankDetailFormScreen} 
          options={{ headerShown: false }} 
        />

        <Stack.Screen 
          name="DocumentBank"
          component={DocumentBankScreen} 
          options={{ headerShown: false }} 
        />
         <Stack.Screen 
          name="ESignature"
          component={ ESignatureScreen} 
          options={{ headerShown: false }} 
        /> 
         <Stack.Screen 
          name="ApplicationSubmit"
          component={ApplicationSubmit} 
          options={{ headerShown: false }} 
        />

         <Stack.Screen 
          name="TabNavigator"
          component={MainTabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="ApplyNewLoan"
          component={ApplyNewLoanScreen} 
          options={{ headerShown: false }} 
        />




      </Stack.Navigator>

  );
};

export default AppNavigator;
