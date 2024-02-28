import React from "react";
import {Image, StyleSheet, View, ImageBackground} from "react-native";
import {Text, Button} from "react-native-paper";
import {applicationTheme} from "./appTheme";

const WelcomeScreen = ({navigation}: {navigation: any}) => {
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
						{fontFamily: "Rubik_700Bold", fontSize: 32, color: "#fff"},
					]}
				>
					MindScape
				</Text>
			</View>

			{/* Sign Up and Sign In Buttons */}
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
				<Button
					onPress={() => navigation.navigate("RegisterScreen")}
					mode="contained"
					style={applicationTheme.buttonStyle}
					contentStyle={{
						flexDirection: "row-reverse",
						marginEnd: 0,
					}}
				>
					<Text
						style={[
							applicationTheme.buttonText,
							{
								fontFamily: "Rubik_700Bold",
								fontSize: 20,
							},
						]}
					>
						Sign Up
					</Text>
				</Button>
				<Button
					onPress={() => navigation.navigate("LoginScreen")}
					mode="contained"
					style={applicationTheme.buttonStyle}
					contentStyle={{
						flexDirection: "row-reverse",
						marginEnd: 0,
					}}
				>
					<Text
						style={[
							applicationTheme.buttonText,
							{
								fontFamily: "Rubik_700Bold",
								fontSize: 20,
							},
						]}
					>
						Sign In
					</Text>
				</Button>
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
