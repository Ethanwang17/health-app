import React from "react";
import {
	Image,
	TouchableOpacity,
	View,
	ImageBackground,
	StatusBar,
} from "react-native";
import {Text, Button} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import CustomButton from "../Components/CustomButton";

const HomepageScreen = ({navigation}: {navigation: any}) => {
	const handleProfilePress = () => {
		navigation.navigate("ProfileScreen");
	};
	return (
		<ImageBackground
			source={require("../assets/homepage_background.png")}
			resizeMode="cover"
			style={applicationTheme.image}
		>
			<StatusBar barStyle="light-content" />

			<View style={{flex: 1}}>
				<View style={applicationTheme.HomepageHeader}>
					<Text
						style={{
							fontFamily: "Rubik_700Bold",
							fontSize: 32,
							color: "#F2F8F6",
						}}
					>
						Hello,{"\n"}
						Ethan!
					</Text>
					<TouchableOpacity
						onPress={handleProfilePress}
						activeOpacity={1}
					>
						<Image
							source={require("../assets/profile_photo.png")}
							style={{
								width: 63,
								height: 63,
								resizeMode: "contain",
							}}
						/>
					</TouchableOpacity>
				</View>
				<View
					style={{
						flex: 1,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Text
						style={[
							applicationTheme.welcomeTextStyle,
							{
								fontFamily: "Inter_600SemiBold",
								fontSize: 20,
								color: "#F2F8F6",
								paddingBottom: 27,
							},
						]}
					>
						Tap to view health
					</Text>
					<View style={applicationTheme.circle}>
						<Image
							source={require("../assets/dark_green_logo.png")}
							style={{width: 113, height: 94}}
							resizeMode="contain"
						/>
					</View>
				</View>
			</View>
		</ImageBackground>
	);
};

export default HomepageScreen;
