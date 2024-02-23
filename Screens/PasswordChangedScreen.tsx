import React from 'react';
import { View, SafeAreaView, Image, Alert, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { applicationTheme } from './appTheme';

const PasswordChanged = ({navigation}: {navigation:any}) => {


    return (
        <SafeAreaView style={applicationTheme.regContent}>
            <View style={applicationTheme.imagePosition}>
                {/* <Image 
                    source={require("../assets/gekko_health_img.jpg")}
                    style={{width: 200, height: 200}}
                /> */}
            </View>
            <View style={applicationTheme.regContent}>
                <Text style={applicationTheme.darkText}>Your password has been changed</Text>
                <Button onPress={() => navigation.navigate('LoginScreen')} mode="contained" style={applicationTheme.buttonStyle}>Login</Button>
            </View>
        </SafeAreaView>
    );
}

export default PasswordChanged;