import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { NavigationContainer } from '@react-navigation/native';  

//SCREENS
import EmailScreen from "./Screens/EmailScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import SignInScreen from './Screens/SignInScreen';
import SignUpScreen from "./Screens/SignUpScreen";
import PwResetScreen from './Screens/PwResetScreen';
import HomeScreen from './Screens/HomeScreen';
import VerifyEmailScreen from "./Screens/VerifyEmailScreen";
import PasswordChanged from "./Screens/PasswordChangedScreen";
import NewPwScreen from "./Screens/NewPwScreen";
import OnboardFirstScreen from "./Screens/OnboardFirstScreen";
import OnboardSecondScreen from "./Screens/OnboardSecondScreen";
import OnboardThirdScreen from "./Screens/OnboardThirdScreen";
import OnboardFourthScreen from "./Screens/OnboardFourthScreen";
import HomepageScreen from "./Screens/HomepageScreen";
import ProfileScreen from "./Screens/ProfileScreen";



import { useFonts, Inter_800ExtraBold, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Rubik_700Bold } from "@expo-google-fonts/rubik";


// import BtDeviceScreen from "./Screens/BtDeviceScreen";

const Stack = createNativeStackNavigator();
export default function App(){
  let [fontsLoaded] = useFonts({
    Inter_800ExtraBold,Rubik_700Bold,Inter_600SemiBold, Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }
    return (
     <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='BtDeviceScreen' 
        screenOptions={{headerStyle: {backgroundColor: "rgb(193,251,252)"}, 
        headerTintColor: "rgb(30,144,255)", 
        headerTitleStyle: {fontWeight: "bold", 
        fontSize: 25}}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown: false }}></Stack.Screen>
          <Stack.Screen name='SignUpScreen' component={SignUpScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='OnboardFirstScreen' component={OnboardFirstScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='OnboardSecondScreen' component={OnboardSecondScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='OnboardThirdScreen' component={OnboardThirdScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='OnboardFourthScreen' component={OnboardFourthScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='HomepageScreen' component={HomepageScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name='ProfileScreen' component={ProfileScreen} options={{headerShown: false}}></Stack.Screen>



          <Stack.Screen name='PwResetScreen' component={PwResetScreen} options={{title: "Enter your e-mail"}}></Stack.Screen>
          <Stack.Screen name='NewPwScreen' component={NewPwScreen} options={{title: "Enter a new password"}}></Stack.Screen>
          <Stack.Screen name='HomeScreen' component={HomeScreen} options={{title: "Home"}}></Stack.Screen>
          <Stack.Screen name='EmailScreen' component={EmailScreen} options={{title: "Email Verification"}}></Stack.Screen>
          <Stack.Screen name='VerifyEmailScreen' component={VerifyEmailScreen} options={{title: "Email Verified"}}></Stack.Screen>
          <Stack.Screen name='PasswordChanged' component={PasswordChanged} options={{headerShown: false}}></Stack.Screen> 
          {/* <Stack.Screen name="BtDeviceScreen" component={BtDeviceScreen} options={{title: "Home"}}></Stack.Screen> */}
      </Stack.Navigator>
     </NavigationContainer>
    );
   }
