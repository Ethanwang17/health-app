import React from "react";
import {
	SafeAreaView,
	View,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import {Text, Button, TextInput} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import {useTogglePasswordVisibility} from "./pwVisibility";
import CustomButton from "../Components/CustomButton";
import TextFields from "../Components/TextFields";

const SignUpScreen = ({navigation}: {navigation: any}) => {
	const {passwordVisibility, handlePasswordVisibility} =
		useTogglePasswordVisibility();

	const handleSignUpPress = () => {
		// Handle button press logic here
		navigation.navigate("OnboardFirstScreen");
	};
	return (
		<SafeAreaView style={applicationTheme.loginContent}>
			<StatusBar barStyle="dark-content" />

			<View style={applicationTheme.view}>
				<Text
					style={[
						applicationTheme.titleTextStyle,
						{
							fontFamily: "Inter_700Bold",
							fontSize: 36,
							paddingBottom: 56,
							paddingTop: 56,
						},
					]}
				>
					Hello there!
				</Text>
				<TextFields textName="First Name" />
				<TextFields textName="Last Name" />
				<TextFields keyboardType="email-address" textName="E-mail" />
				<TextFields textName="Password" marginBottom={56} />
				<CustomButton onPress={handleSignUpPress} text="Sign Up" />

				<View style={applicationTheme.container}>
					<View style={applicationTheme.fotterTextAlign}>
						<Text style={applicationTheme.footerTextStyle}>
							Already have an account?{" "}
						</Text>
						<TouchableOpacity
							onPress={() => navigation.navigate("SignInScreen")}
						>
							<Text style={applicationTheme.signInTextStyle}>
								Sign In
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
			{/* <Text
					style={[
						applicationTheme.titleTextStyle,
						{
							fontFamily: "Inter_600SemiBold",
							fontSize: 16,
						},
					]}
				>
					First Name
				</Text>
				<TextInput
					style={applicationTheme.input}
					underlineColor="transparent"
					selectionColor={"black"}
					activeUnderlineColor="transparent"
				></TextInput>
				<Image
					source={require("../assets/rectangle.png")}
					style={{
						width: 350,
						height: 3,
						borderRadius: 90,
					}}
				/>
				<Text
					style={[
						applicationTheme.titleTextStyle,
						{
							fontFamily: "Inter_600SemiBold",
							fontSize: 16,
							paddingTop: 34,
						},
					]}
				>
					Last Name
				</Text>
				<TextInput
					style={applicationTheme.input}
					underlineColor="transparent"
					selectionColor={"black"}
					activeUnderlineColor="transparent"
				></TextInput>

				<Image
					source={require("../assets/rectangle.png")}
					style={{
						width: 350,
						height: 3,
						borderRadius: 90,
					}}
				/>
				<Text
					style={[
						applicationTheme.titleTextStyle,
						{
							fontFamily: "Inter_600SemiBold",
							fontSize: 16,
							paddingTop: 34,
						},
					]}
				>
					E-mail
				</Text>
				<TextInput
					style={applicationTheme.input}
					keyboardType="email-address"
					underlineColor="transparent"
					selectionColor={"black"}
					activeUnderlineColor="transparent"
				></TextInput>

				<Image
					source={require("../assets/rectangle.png")}
					style={{
						width: 350,
						height: 3,
						borderRadius: 90,
					}}
				/>
				<Text
					style={[
						applicationTheme.titleTextStyle,
						{
							fontFamily: "Inter_600SemiBold",
							fontSize: 16,
							paddingTop: 34,
						},
					]}
				>
					Password
				</Text>
				<TextInput
					style={applicationTheme.input}
					underlineColor="transparent"
					selectionColor={"black"}
					activeUnderlineColor="transparent"
				></TextInput>

				<Image
					source={require("../assets/rectangle.png")}
					style={{
						width: 350,
						height: 3,
						borderRadius: 90,
						marginBottom: 56,
					}}
				/> */}
		</SafeAreaView>
		// <SafeAreaView style={applicationTheme.backgroundStyle}>
		//     <ScrollView>
		//         <View style={applicationTheme.regContent}>
		//             <Text style={applicationTheme.textStyle}>Create your Health App Account</Text>
		//             <TextInput label="First Name"></TextInput>
		//             <TextInput label="Last Name"></TextInput>
		//             <TextInput label="Email"></TextInput>
		//             <TextInput label="Password" secureTextEntry={passwordVisibility} right={<TextInput.Icon onPress={handlePasswordVisibility} icon="eye-off-outline"/>}></TextInput>
		//             <TextInput label="Confirm Password" secureTextEntry={passwordVisibility} right={<TextInput.Icon onPress={handlePasswordVisibility} icon="eye-off-outline"/>}></TextInput>
		//             <TextInput label="Phone Number" keyboardType="phone-pad"></TextInput>

		//             <Button onPress={() => navigation.navigate('EmailScreen')} mode="contained" style={applicationTheme.buttonStyle}>Next</Button>
		//         </View>
		//     </ScrollView>
		// </SafeAreaView>
	);
};

export default SignUpScreen;
