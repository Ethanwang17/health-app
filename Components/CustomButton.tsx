import React from 'react';
import { Button, Text } from 'react-native-paper';
import { StyleSheet} from 'react-native';


const CustomButton = ({ onPress, text, backgroundColor = '#153D45', textColor = '#F2F8F6' }: { onPress: () => void, text: string, backgroundColor?: string, textColor?: string }) => {
  return (
    <Button
      onPress={onPress}
      mode="contained"
      style={[styles.buttonStyle, { backgroundColor }]}
      contentStyle={{
        flexDirection: "row-reverse",
        marginEnd: 0,
      }}
    >
      <Text style={[styles.buttonText, { color: textColor, fontFamily: "Rubik_700Bold", fontSize: 20 }]}>
        {text}
      </Text>
    </Button>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginVertical: 10,
    alignSelf: "center",
    justifyContent: "center",
    width: 350,
    height: 55,
    borderWidth: 4,
    borderColor: "#153D45",
  },
  buttonText: {
    color: "white",
  },
})

export default CustomButton;