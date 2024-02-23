import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { NavigationContainer } from '@react-navigation/native';  

//SCREENS
import EmailScreen from "./Screens/EmailScreen";
import WelcomeScreen from "./Screens/WelcomeScreen";
import LoginScreen from './Screens/LoginScreen';
import RegisterScreen from "./Screens/RegisterScreen";
import PwResetScreen from './Screens/PwResetScreen';
import HomeScreen from './Screens/HomeScreen';
import VerifyEmailScreen from "./Screens/VerifyEmailScreen";
import PasswordChanged from "./Screens/PasswordChangedScreen";
import NewPwScreen from "./Screens/NewPwScreen";
import BtDeviceScreen from "./Screens/BtDeviceScreen";

const Stack = createNativeStackNavigator();
export default function App(){
    return (
     <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='BtDeviceScreen' 
        screenOptions={{headerStyle: {backgroundColor: "rgb(193,251,252)"}, 
        headerTintColor: "rgb(30,144,255)", 
        headerTitleStyle: {fontWeight: "bold", 
        fontSize: 25}}}>
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{headerShown: false}}></Stack.Screen>
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{title: "Welcome Back" }}></Stack.Screen>
          <Stack.Screen name='RegisterScreen' component={RegisterScreen} options={{title: "Create an Account"}}></Stack.Screen>
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
