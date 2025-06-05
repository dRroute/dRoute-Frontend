import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { Provider, useDispatch, useSelector } from "react-redux";
import OnboardingScreen from './screens/onBoardingScreens/onBoardingScreen';
import MyStatusBar from './components/myStatusBar';
import SignUpScreen from './screens/auth/signUp';
import SignInScreen from './screens/auth/signIn';
import VerificationScreen from './screens/auth/verificationScreen';
import ForgetPassword from './screens/auth/forgetPassword';
import CompleteProfileForm from './screens/completeProfile/completeProfileForm';
import SearchVehicleForm from './screens/journey/searchVehicleForm';
import Home from './screens/home/home';
import AllSearchedJourneyList from './screens/journey/allSearchedJourneyList';
import BottomNavigationBar from './components/bottomNavigationBar';
import TermsAndConditionsScreen from './screens/profile/termsAndCondition';
import PrivacyPolicyScreen from './screens/profile/privacyPolicy';
import ChangePassword from './screens/profile/changePassword';
import EditProfile from './screens/profile/editProfile';
import ChatScreen from './screens/chatScreen/chatScreen';
import PendingRequests from './screens/orders/pendingRequests';
import HelpScreen from './screens/support/helpScreen';
import AllSupportTickets from './screens/support/allSupportTickets';
import AllOrders from './screens/orders/allOrders';
import LocationPickerScreen from './screens/journey/locationPicker';
import AllNearestJourney from './screens/journey/allNearestJourney';
import RequestDetailScreen from './screens/orders/requestDetailScreen';
import store from './redux/store/store';
import Snackbar from './components/snackbar';
import InstructionToComplete from './screens/completeProfile/instructionToComplete';
import PendingForApprovalScreen from './screens/completeProfile/pendingForApproval';
import profileStatusScreen from './screens/completeProfile/pendingAccountScreen';
import VehicleAndParcelDetail from './screens/journey/vehicleAndParcelDetail';

import UserHome from './screens/home/userHome';
import { selectUser } from './redux/selector/authSelector';
import VehicleDetail from './screens/journey/vehicleDetail';
import OrderDetailScreen from './screens/orders/orderDetailScreen';
import AllReviewScreen from './screens/orders/allReviewScreen';
import AddAddress from './screens/orders/addAddress';
import PaymentGatewayScreen from './screens/orders/paymentGateway';

const Stack = createStackNavigator();

function AppNavigator() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    console.log('User changed:', user);
  }, [user]);

  return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            ...TransitionPresets.SlideFromRightIOS,
          }}
        >
          {!user ? (
            <>
              <Stack.Screen name="Onboarding" component={OnboardingScreen} />
              <Stack.Screen name="SignInScreen" component={SignInScreen} />
              <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
              <Stack.Screen name="VerificationScreen" component={VerificationScreen} />
              <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
            </>
            ) : user.profileStatus === 'PENDING_COMPLETION' ? (
             <>
               <Stack.Screen name="AddAddress" component={AddAddress} />
              <Stack.Screen name="BottomNavigationBar" component={BottomNavigationBar} />
               <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="VehicleAndParcelDetail" component={VehicleAndParcelDetail} />
               <Stack.Screen name="VehicleDetail" component={VehicleDetail} />
              <Stack.Screen name="UserHome" component={UserHome} />
               <Stack.Screen name="SearchVehicleForm" component={SearchVehicleForm} />
              <Stack.Screen name="AllJourneyList" component={AllSearchedJourneyList} />
              <Stack.Screen name="PrivacyPolicyScreen" component={PrivacyPolicyScreen} />
              <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} />
              <Stack.Screen name="ChangePassword" component={ChangePassword} />
              <Stack.Screen name="EditProfile" component={EditProfile} />
              <Stack.Screen name="ChatScreen" component={ChatScreen} />
              <Stack.Screen name="PendingRequests" component={PendingRequests} />
              <Stack.Screen name="AllOrders" component={AllOrders} />
               <Stack.Screen name="OrderDetailScreen" component={OrderDetailScreen} />
                <Stack.Screen name="PaymentGatewayScreen" component={PaymentGatewayScreen} />
                <Stack.Screen name="AllReviewScreen" component={AllReviewScreen} />
              <Stack.Screen name="LocationPickerScreen" component={LocationPickerScreen} />
              <Stack.Screen name="AllNearestJourney" component={AllNearestJourney} />
              <Stack.Screen name="RequestDetailScreen" component={RequestDetailScreen} />
              <Stack.Screen name="AllSupportTickets" component={AllSupportTickets} />
              <Stack.Screen name="HelpScreen" component={HelpScreen} />
            </>
          ) : (
            <>
              <Stack.Screen name="profileStatusScreen" component={profileStatusScreen} />
              <Stack.Screen name="HelpScreen" component={HelpScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
   
  );
}

export default function App() {
  return (
    <Provider store={store}>
        <Snackbar />
         <View style={{ flex: 1 }}>
         <MyStatusBar/>
       <AppNavigator />
      </View>
    </Provider>
  );
}
