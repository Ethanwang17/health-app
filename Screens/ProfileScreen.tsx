import React from "react";
import {
	SafeAreaView,
	View,
	TouchableOpacity,
	StatusBar,
	Image,
	ScrollView,
} from "react-native";
import {Text, Button, TextInput} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import {useTogglePasswordVisibility} from "./pwVisibility";
import CustomButton from "../Components/CustomButton";
import TextFields from "../Components/TextFields";

const ProfileScreen = ({navigation}: {navigation: any}) => {
	const {passwordVisibility, handlePasswordVisibility} =
		useTogglePasswordVisibility();

	const handleSavePress = () => {
		// Handle button press logic here
		navigation.navigate("OnboardFirstScreen");
	};

	const handleCancelPress = () => {
		// Handle button press logic here
		navigation.navigate("OnboardFirstScreen");
	};
	return (
		<ScrollView>
			<View
				style={{
					display: "flex",
					flex: 1,
					flexGrow: 1,
					justifyContent: "flex-start",
					alignItems: "center",
				}}
			>
				<StatusBar barStyle="dark-content" />

				<View style={applicationTheme.ProfileHeader}>
					
				<View style={applicationTheme.NavigationHeader}>
					<Text
						style={[
							applicationTheme.welcomeTextStyle,
							{
								fontFamily: "Inter_600SemiBold",
								fontSize: 20,
								color: "#153D45",
								paddingBottom: 27,
							},
						]}
					>
						Profile
					</Text>
					<Text
						style={[
							applicationTheme.welcomeTextStyle,
							{
								fontFamily: "Inter_600SemiBold",
								fontSize: 20,
								color: "#153D45",
								paddingBottom: 27,
							},
						]}
					>
						Log Out
					</Text>
					</View>

					<Image
						source={require("../assets/profile_photo.png")}
						style={{
							width: 108,
							height: 108,
							resizeMode: "contain",
						}}
					/>
					<Text
						style={[
							applicationTheme.welcomeTextStyle,
							{
								fontFamily: "Inter_600SemiBold",
								fontSize: 20,
								color: "#153D45",
								paddingTop: 21,
								paddingBottom: 50,
							},
						]}
					>
						Ethan Wang
					</Text>
				</View>
				<View
					style={[
						applicationTheme.view,
						{
							paddingBottom: 50,
						},
					]}
				>
					<TextFields textName="First Name" />
					<TextFields textName="Last Name" />
					<TextFields
						keyboardType="email-address"
						textName="E-mail"
					/>
					<TextFields textName="Password" marginBottom={56} />
					<CustomButton onPress={handleSavePress} text="Save" />
					<CustomButton
						onPress={handleCancelPress}
						text="Cancel"
						backgroundColor="#F2F8F6"
						textColor="#153D45"
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default ProfileScreen;
