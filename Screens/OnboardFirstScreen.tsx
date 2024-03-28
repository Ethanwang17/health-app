import React from "react";
import {View, Image, SafeAreaView, StatusBar} from "react-native";
import {Button, TextInput, Text} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import CustomButton from "../Components/CustomButton";

const OnboardFirstScreen = ({navigation}: {navigation: any}) => {
	const NextScreen = () => {
		// Handle button press logic here
		navigation.navigate("OnboardSecondScreen");
	};

	return (
		<SafeAreaView style={applicationTheme.loginContent}>
			<StatusBar barStyle="dark-content" />
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
							source={require("../assets/dark_green_logo.png")}
							style={{
								width: 209,
								height: 116.82,
								resizeMode: "contain",
							}}
						/>
					</View>
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

export default OnboardFirstScreen;
