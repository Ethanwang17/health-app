import React from "react";
import { Image, SafeAreaView, View} from "react-native";
import { Text, Button} from "react-native-paper";
import { applicationTheme } from './appTheme';

const EmailScreen = ({navigation}: {navigation:any}) => {
    
    return (
        <SafeAreaView style={applicationTheme.backgroundTheme2}>
            <View style={{justifyContent: "center", alignItems: "center",}}>
                {/* <Image 
                    source={require("../assets/email_icon.png")}
                    style={{width: 150, height: 110, marginBottom: 35}}
                /> */}
            </View>
            <View style={applicationTheme.regContent}>
                <Text style={{fontSize: 15,textAlign: "center", color: "rgb(96,96,96)", paddingBottom: 10}}>We sent a confirmation email to:</Text>
                <Text style={{textAlign: 'center', marginBottom: 30}}>PlaceHolder@Email.com</Text>
                <Text style={applicationTheme.textStyle}>Please check your inbox to verify account.</Text>
            </View>
            <View style={{display: "flex", flexDirection: "row", marginTop: 200}}>
                <Text style={{color: "black", fontWeight: "bold", marginTop: 10}}>Didn't recieve email?</Text>
                <Button onPress={() => navigation.navigate('EmailScreen')} style={{padding: 0, borderRadius: 0}}> Click to resend</Button>
            </View>
        </SafeAreaView>
    );
}

export default EmailScreen;