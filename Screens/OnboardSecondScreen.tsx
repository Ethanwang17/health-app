import React from "react";
import {View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {Button, Card, TextInput, Text} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import {useTogglePasswordVisibility} from "./pwVisibility";
import {transparent} from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import CustomButton from "../Components/CustomButton";

const OnboardSecondScreen = ({navigation}: {navigation: any}) => {
	const NextScreen = () => {
		// Handle button press logic here
		navigation.navigate("WelcomeScreen");
	};

	return (
		<SafeAreaView style={[applicationTheme.loginContent, {flex: 1}]}>
			<View style={{flex: 1}}>
				<View style={applicationTheme.onboardHeader}>
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
						Upload a{"\n"}
						profile picture.
					</Text>
				</View>

				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Image
						source={require("../assets/circle_rings.png")}
						style={{width: 260, height: 260}}
						resizeMode="contain"
					/>
				</View>

				<View
					style={{
						flex: 1,
						justifyContent: "flex-end",
						alignItems: "center",
					}}
				>
					<View
						style={{
							flexDirection: "row",
							// justifyContent: "center",
							marginBottom: 20,
						}}
					>
						<View
							style={{
								width: 10,
								height: 8,
								borderRadius: 5,
								backgroundColor: "#BFDDE2",
								marginHorizontal: 2,
							}}
						/>
						<View
							style={{
								width: 26,
								height: 8,
								borderRadius: 5,
								backgroundColor: "#153D45",
								marginHorizontal: 2,
							}}
						/>
						<View
							style={{
								width: 10,
								height: 8,
								borderRadius: 5,
								backgroundColor: "#BFDDE2",
								marginHorizontal: 2,
							}}
						/>
						<View
							style={{
								width: 10,
								height: 8,
								borderRadius: 5,
								backgroundColor: "#BFDDE2",
								marginHorizontal: 2,
							}}
						/>
					</View>

					<CustomButton onPress={NextScreen} text="Continue" />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default OnboardSecondScreen;
