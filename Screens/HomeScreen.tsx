import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from 'react-native-paper';
import { applicationTheme } from './appTheme';

const HomeScreen = () => {
    return (
        <SafeAreaView style={applicationTheme.regContent}>
            <Text>Empty home screen</Text>
        </SafeAreaView>
    );
}

export default HomeScreen;