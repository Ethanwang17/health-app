import React from "react";
import {Image, StyleSheet, View, ImageBackground} from "react-native";
import {Text, Button} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import CustomButton from "../Components/CustomButton";

const WelcomeScreen = ({navigation}: {navigation: any}) => {
	const handleSignInPress = () => {
		navigation.navigate("SignInScreen");
	};

	const handleSignUpPress = () => {
		navigation.navigate("SignUpScreen");
	};
	return (
		<ImageBackground
			source={require("../assets/dot_background.png")}
			resizeMode="cover"
			style={applicationTheme.image}
		>
			{/* Welcome LOGO and Title */}
			<View style={applicationTheme.welcomeLogo}>
				<View style={applicationTheme.imagePosition}>
					<Image
						source={require("../assets/logo.png")}
						style={{
							width: 140,
							height: 116.82,
							resizeMode: "contain",
						}}
					/>
				</View>

				<Text
					style={[
						applicationTheme.welcomeTextStyle,
						{
							fontFamily: "Rubik_700Bold",
							fontSize: 32,
							color: "#fff",
						},
					]}
				>
					MindScape
				</Text>
			</View>

			{/* White Bottom Container */}
			<View style={applicationTheme.bottomSpacing}>
				<Text
					style={[
						applicationTheme.welcomeTextStyle,
						{
							fontFamily: "Inter_800ExtraBold",
							fontSize: 32,
							color: "#153D45",
						},
					]}
				>
					Welcome
				</Text>
				<Text
					style={[
						applicationTheme.welcomeTextStyle,
						{
							fontFamily: "Inter_600SemiBold",
							fontSize: 15,
							color: "#153D45",
							paddingTop: 28,
							paddingBottom: 40,
						},
					]}
				>
					Your all-in-one health companion!{"\n"}
					Monitor and improve both your physical{"\n"}
					and mental health with ease.
				</Text>
				<CustomButton onPress={handleSignInPress} text="Sign In" />
				<CustomButton onPress={handleSignUpPress} text="Sign Up" />
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
});

export default WelcomeScreen;
