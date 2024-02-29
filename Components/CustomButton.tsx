import React from 'react';
import { Button, Text } from 'react-native-paper';
import { applicationTheme } from '../Screens/appTheme';

const CustomButton = ({ onPress, text }: { onPress: () => void, text: string }) => {
  return (
    <Button
      onPress={onPress}
      mode="contained"
      style={applicationTheme.buttonStyle}
      contentStyle={{
        flexDirection: "row-reverse",
        marginEnd: 0,
      }}
    >
      <Text style={[applicationTheme.buttonText, { fontFamily: "Rubik_700Bold", fontSize: 20 }]}>
        {text}
      </Text>
    </Button>
  );
};

export default CustomButton;
