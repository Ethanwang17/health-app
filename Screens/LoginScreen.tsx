import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { Button, Card, TextInput, Text } from 'react-native-paper';
import { applicationTheme } from './appTheme';
import { useTogglePasswordVisibility } from './pwVisibility';

interface LoginScreenProps {
    navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {

    const resetPw = () => props.navigation.navigate('PwResetScreen');
    const login = () => props.navigation.navigate('BtDeviceScreen');
    const register = () => props.navigation.navigate('RegisterScreen');

    const { passwordVisibility, handlePasswordVisibility } =
        useTogglePasswordVisibility();


    return (
        <SafeAreaView style={applicationTheme.loginContent}>
            <View>
                
            </View>
            <View style={applicationTheme.view}>
                <Card style={applicationTheme.cardStyle}>
                    <Card.Title title="Login" titleStyle={applicationTheme.cardTitleStyle}></Card.Title>
                    <Card.Content>
                        
                            <TextInput label="Email" keyboardType="email-address"></TextInput>
                            <TextInput label="Password" secureTextEntry={passwordVisibility} right={<TextInput.Icon onPress={handlePasswordVisibility} icon="eye-off-outline"/>}></TextInput>
                            
                            <Button onPress={resetPw} style={{marginBottom: 35}}>Forgot email/password</Button>

                            <View style={{display: "flex", flexDirection: "row"}}>
                                <Text style={{marginTop: 10}}>Don't have an account yet?</Text>
                                <Button onPress={register} style={{padding: 0, borderRadius: 0}}>Sign Up</Button>
                            </View>
                            <Button onPress={login} mode="contained" style={applicationTheme.buttonStyle}>Login</Button>

                    </Card.Content>
                </Card>
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;