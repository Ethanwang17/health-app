import React from "react";
import {Image, SafeAreaView, View, TouchableOpacity} from "react-native";
import {Text, Button, TextInput} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import {useTogglePasswordVisibility} from "./pwVisibility";

const RegisterScreen = ({navigation}: {navigation: any}) => {
	const {passwordVisibility, handlePasswordVisibility} =
		useTogglePasswordVisibility();

	return (
		<SafeAreaView style={applicationTheme.loginContent}>
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
					Hello There!
				</Text>

				<Text
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
					}}
				/>
				<Button
					onPress={() => navigation.navigate("WelcomeScreen")}
					mode="contained"
					style={[
						applicationTheme.buttonStyle,
						{
							marginTop: 56,
						},
					]}
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
				<View style={applicationTheme.container}>
					<View style={applicationTheme.fotterTextAlign}>
						<Text style={applicationTheme.footerTextStyle}>
							Already have an account?{" "}
						</Text>
						<TouchableOpacity
							onPress={() => navigation.navigate("LoginScreen")}
						>
							<Text style={applicationTheme.signInTextStyle}>
								Sign In
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
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

export default RegisterScreen;
