import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Button, FlatList, ListRenderItemInfo, Alert } from 'react-native';


export default function CustomButton(props: { text: string, onPress?(): void }){
    return(
        <TouchableOpacity onPress={(props.onPress)}>
            <View style={styles.button}>
                <Text style={styles.text}>(text)</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 8,
        paddingVertical: 14, 
        paddingHorizontal: 10,
        backgroundColor: "#44b88f" 
    },
    text:{
        color: 'gray',
        fontWeight: 'bold',
        fontSize: 16,
        textAlign: 'center'

    }
})