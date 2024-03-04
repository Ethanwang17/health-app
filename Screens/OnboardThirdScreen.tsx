import React from "react";
import {View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {Button, Card, TextInput, Text} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import {useTogglePasswordVisibility} from "./pwVisibility";
import {transparent} from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import CustomButton from "../Components/CustomButton";

const OnboardThirdScreen = ({navigation}: {navigation: any}) => {
	const NextScreen = () => {
		// Handle button press logic here
		navigation.navigate("OnboardFourthScreen");
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
						Sync health data{"\n"}
						to MindScape.
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
						style={applicationTheme.Group56282}
						source={require("../assets/health_connect.png")}
					/>
					<Text
						style={[
							applicationTheme.welcomeTextStyle,
							{
								paddingTop: 69,
								width: "80%",
								fontFamily: "Inter_600SemiBold",
								fontSize: 15,
							},
						]}
					>
						To provide you with a comprehensive health monitoring
						experience, MindScape requests access to your Apple
						Health data. This allows us to gather vital information
						like your daily steps, heart rate, sleep analysis, and
						more, ensuring personalized insights and recommendations
						for your well-being.{" "}
					</Text>
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
					</View>

					<CustomButton onPress={NextScreen} text="Connect to Health" />
				</View>
			</View>
		</SafeAreaView>
	);
};

export default OnboardThirdScreen;
