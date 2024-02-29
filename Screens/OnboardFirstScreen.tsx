import React from "react";
import {View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {Button, Card, TextInput, Text} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import {useTogglePasswordVisibility} from "./pwVisibility";
import {transparent} from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import CustomButton from "../Components/CustomButton";

const OnboardFirstScreen = ({navigation}: {navigation: any}) => {
	const NextScreen = () => {
		// Handle button press logic here
		navigation.navigate("WelcomeScreen");
	};

	return (
		<SafeAreaView style={[applicationTheme.loginContent, {flex: 1}]}>
			<View style={{flex: 1}}>
				<View style={applicationTheme.welcomeLogo}>
					<View style={applicationTheme.imagePosition}>
						<Text
							style={[
								applicationTheme.welcomeTextStyle,
								{
									fontFamily: "Rubik_700Bold",
									fontSize: 32,
									color: "#153D45",
									paddingBottom: 84,
								},
							]}
						>
							Welcome to {"\n"}
							MindScape
						</Text>
						<Image
							source={require("../assets/logo.png")}
							style={{
								width: 209,
								height: 116.82,
								resizeMode: "contain",
							}}
						/>
					</View>
				</View>
				<View style={{flex: 1, justifyContent: "flex-end"}}>
					<CustomButton onPress={NextScreen} text="Continue" />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default OnboardFirstScreen;
