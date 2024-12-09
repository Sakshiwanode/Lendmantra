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
import YourLoanScreen from '../screens/Dashboard/Active loans/YourLoan';
import LoanEmiScreen from '../screens/Dashboard/Active loans/LoanEmi';
import EmiCalcultorScreeen from '../screens/Dashboard/Active loans/EmiCalculator';
import ClosedLoanScreen from '../screens/Dashboard/Home/ClosedLoan';
import OverDueLoanScreen from '../screens/Dashboard/Home/OverDueLoan';
import RequestedLoanScreen from '../screens/Dashboard/Home/RequestedLoan';
import UpcomingEmiScreen from '../screens/Dashboard/Home/UpcomingEmi';
import RepaymentProgressScreen from '../screens/Dashboard/Active loans/RepaymentProgress';
import RepaymentHistoryScreen from '../screens/Dashboard/Home/RepaymentHistory';
import PersonalLoanScreen from '../screens/Dashboard/Home/PersonalLoan';
import BusinessLoanScreen from '../screens/Dashboard/Home/BusinessLoan';





const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
   
      <Stack.Navigator>
    <Stack.Screen name="login" component={LoginScreen} options={{ headerShown: false }} />
<Stack.Screen name="OTPVerify" component={OTPScreen} options={{ headerShown: false }} />
<Stack.Screen name="LoanApply" component={LoanApplyScreen} options={{ headerShown: false }} />
<Stack.Screen name="AadharNoVerify" component={AadharScreen} options={{ headerShown: false }} />
<Stack.Screen name="AadharOTP" component={AadharOTPScreen} options={{ headerShown: false }} />
<Stack.Screen name="UserDetail" component={UserDetailScreen} options={{ headerShown: false }} />
<Stack.Screen name="BankAccountVerify" component={BankAccountVerifyScreen} options={{ headerShown: false }} />
<Stack.Screen name="AccountOTPVerify" component={BankVerifyOTPScreen} options={{ headerShown: false }} />
<Stack.Screen name="BankDetail" component={BankDetailScreen} options={{ headerShown: false }} />
<Stack.Screen name="BankDetailForm" component={BankDetailFormScreen} options={{ headerShown: false }} />
<Stack.Screen name="DocumentBank" component={DocumentBankScreen} options={{ headerShown: false }} />
<Stack.Screen name="ESignature" component={ESignatureScreen} options={{ headerShown: false }} />
<Stack.Screen name="ApplicationSubmit" component={ApplicationSubmit} options={{ headerShown: false }} />
<Stack.Screen name="TabNavigator" component={MainTabNavigator} options={{ headerShown: false }} />
<Stack.Screen name="ApplyNewLoan" component={ApplyNewLoanScreen} options={{ headerShown: false }} />
<Stack.Screen name="YourLoan" component={YourLoanScreen} options={{ headerShown: false }} />
<Stack.Screen name="OverDueLoan" component={OverDueLoanScreen} options={{ headerShown: false }} />
<Stack.Screen name="LoanEMI" component={LoanEmiScreen} options={{ headerShown: false }} />
<Stack.Screen name="EMICalculator" component={EmiCalcultorScreeen} options={{ headerShown: false }} />
<Stack.Screen name="ClosedLoan" component={ClosedLoanScreen} options={{ headerShown: false }} />
<Stack.Screen name="RequestedLoan" component={RequestedLoanScreen} options={{ headerShown: false }} />
<Stack.Screen name="RepaymentProgress" component={RepaymentProgressScreen} options={{ headerShown: false }} />
<Stack.Screen name="RepaymentHistory" component={RepaymentHistoryScreen} options={{ headerShown: false }} />
<Stack.Screen name="UpcomingEmi" component={UpcomingEmiScreen} options={{ headerShown: false }} />
<Stack.Screen name="PersonalLoan" component={PersonalLoanScreen} options={{ headerShown: false }} />
<Stack.Screen name="BusinessLoan" component={BusinessLoanScreen} options={{ headerShown: false }} />

      </Stack.Navigator>

  );
};

export default AppNavigator;
