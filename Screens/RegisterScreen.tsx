import React from "react";
import { ScrollView, SafeAreaView, View } from "react-native";
import { Text, Button, TextInput } from "react-native-paper";
import { applicationTheme } from './appTheme';
import { useTogglePasswordVisibility } from './pwVisibility';

const RegisterScreen = ({navigation}: {navigation:any}) => {

    const { passwordVisibility, handlePasswordVisibility } =
        useTogglePasswordVisibility();
    
    return (
        <SafeAreaView style={applicationTheme.backgroundStyle}>
            <ScrollView>
                <View style={applicationTheme.regContent}>
                    <Text style={applicationTheme.textStyle}>Create your Health App Account</Text>
                    <TextInput label="First Name"></TextInput>
                    <TextInput label="Last Name"></TextInput>
                    <TextInput label="Email"></TextInput>
                    <TextInput label="Password" secureTextEntry={passwordVisibility} right={<TextInput.Icon onPress={handlePasswordVisibility} icon="eye-off-outline"/>}></TextInput>
                    <TextInput label="Confirm Password" secureTextEntry={passwordVisibility} right={<TextInput.Icon onPress={handlePasswordVisibility} icon="eye-off-outline"/>}></TextInput>
                    <TextInput label="Phone Number" keyboardType="phone-pad"></TextInput>
                    
                    <Button onPress={() => navigation.navigate('EmailScreen')} mode="contained" style={applicationTheme.buttonStyle}>Next</Button>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default RegisterScreen;