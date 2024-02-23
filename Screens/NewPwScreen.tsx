import React from 'react';
import { View, SafeAreaView, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import { applicationTheme } from './appTheme';
import { useTogglePasswordVisibility } from './pwVisibility';

const NewPwScreen = ({navigation}: {navigation:any}) => {

    const { passwordVisibility, handlePasswordVisibility } =
        useTogglePasswordVisibility();

    return (
        <SafeAreaView style={applicationTheme.backgroundStyle}>
            <View style={applicationTheme.regContent}>
                <Text style={applicationTheme.textStyle}>Enter a new Password</Text>
                <TextInput label="Password" secureTextEntry={passwordVisibility} right={<TextInput.Icon onPress={handlePasswordVisibility} icon="eye-off-outline"/>}></TextInput>
                <TextInput label="Confirm Password" secureTextEntry={passwordVisibility} right={<TextInput.Icon onPress={handlePasswordVisibility} icon="eye-off-outline"/>}></TextInput>
                <Text style={{marginBottom: 300}}></Text>
                <Button onPress={() => navigation.navigate('PasswordChanged')} mode="contained" style={applicationTheme.buttonStyle}>Continue</Button>
            </View>
        </SafeAreaView>
    );
}

export default NewPwScreen;