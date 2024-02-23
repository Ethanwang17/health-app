import React from "react";
import { Image, StyleSheet, View, ScrollView, SafeAreaView, } from 'react-native';
import { Text, Button } from "react-native-paper";
import { applicationTheme } from './appTheme';


const WelcomeScreen = ({navigation}: {navigation:any})=>{
    

    return(
        <SafeAreaView style={applicationTheme.backgroundStyle}>
            <ScrollView>
                <View style={applicationTheme.regContent}>
                    <View style={applicationTheme.imagePosition}>
                        {/* <Image 
                            source={require("../assets/gekko_health_img.jpg")}
                            style={{width: 200, height: 200}}
                        /> */}
                    </View>
                    <View style={applicationTheme.welcomeSpacing}>
                        <Text style={applicationTheme.welcomeTextStyle}>All in One Health Monitoring</Text>
                    </View>
                    
                    <View style={applicationTheme.bottomSpacing}>
                        <Button 
                            onPress={() => navigation.navigate('RegisterScreen')} 
                            mode="contained"  style={applicationTheme.buttonStyle} 
                            icon="arrow-right" 
                            contentStyle={{flexDirection: 'row-reverse', marginEnd: 0}}>
                                Let's Start
                        </Button>
                        <Text style={applicationTheme.textStyle}>Already a Member?</Text>
                        <Button
                            onPress={() => navigation.navigate('LoginScreen')} 
                            mode="contained"  
                            style={applicationTheme.smallerBtnStyle}>
                                Login
                        </Button>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainView:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
    }
})

export default WelcomeScreen