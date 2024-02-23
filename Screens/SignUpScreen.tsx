import React from "react";
import { StyleSheet, Text, View,} from 'react-native';


const SignUpScreen = ({navigation}: {navigation:any})=>{

    return(
        <View style={styles.mainView}>
            <Text style={styles.SignUp}>Sign Up</Text>
            <Text>Full Name</Text>
            <Text>Email</Text>
            <Text>Password</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    SignUp:{
        fontSize: 22,
        Color: '#3873f2',
        textAlign: 'center'
        
    },
    mainView:{
        marginTop: 40,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SignUpScreen 