import React from 'react';
import { View, SafeAreaView, Alert } from 'react-native';
import { Button, TextInput, Text } from 'react-native-paper';
import { applicationTheme } from './appTheme';

interface resetScreenProps {
    navigation: any;
}

const PwResetScreen = (props: resetScreenProps) => {
    const emailSentAlert = () => Alert.alert("E=mail Sent", "We have sent you an e-mail. Please contact us if you do not receive it within a few minutes.")
    
    const pwScreenNav = () => props.navigation.navigate('NewPWScreen')

    return (
        <SafeAreaView style={applicationTheme.backgroundStyle}>
            
            <View style={applicationTheme.regContent}>
                <Text style={applicationTheme.textStyle}>You will receive a link to confirm the passwrod change to the e-mail address provided.</Text>
                <TextInput label="E-mail address" style={{marginBottom: 300}}></TextInput>
                <Button onPress={emailSentAlert} mode="contained" style={applicationTheme.buttonStyle}>Reset My Password</Button>
                <Button onPress={pwScreenNav} mode="contained" style={applicationTheme.buttonStyle}>temp_btn</Button>
            </View>
        </SafeAreaView>
    );
}

export default PwResetScreen