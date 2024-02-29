import React from "react";
import {View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {Button, TextInput, Text} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import {useTogglePasswordVisibility} from "./pwVisibility";
import CustomButton from "../Components/CustomButton";
import TextFields from "../Components/TextFields";

interface LoginScreenProps {
	navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {
	const resetPw = () => props.navigation.navigate("PwResetScreen");
	const login = () => props.navigation.navigate("BtDeviceScreen");
	const register = () => props.navigation.navigate("SignUpScreen");

	const {passwordVisibility, handlePasswordVisibility} =
		useTogglePasswordVisibility();

	const handleSignInPress = () => {
		// Handle button press logic here
		props.navigation.navigate("OnboardFirstScreen");
	};

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
					Welcome!
				</Text>
				<TextFields keyboardType="email-address" textName="E-mail" />
				<TextFields textName="Password" marginBottom={56} />

				<CustomButton onPress={handleSignInPress} text="Sign In" />
				{/* <Text
					style={[
						applicationTheme.titleTextStyle,
						{
							fontFamily: "Inter_600SemiBold",
							fontSize: 16,
						},
					]}
				>
					E-mail
				</Text>


				<Image
					source={require("../assets/rectangle.png")}
					style={{
						width: 387,
						height: 3,
						borderRadius: 90,
					}}
				/> */}
				{/* <Text
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

				{/* <TextFields /> */}

				<Text
					style={[
						applicationTheme.welcomeTextStyle,
						{
							fontFamily: "Inter_600SemiBold",
							fontSize: 14,
							paddingTop: 20,
						},
					]}
				>
					Forgot password?
				</Text>
				<View style={applicationTheme.container}>
					<View style={applicationTheme.fotterTextAlign}>
						<Text style={applicationTheme.footerTextStyle}>
							New User?{" "}
						</Text>
						<TouchableOpacity
							onPress={() =>
								props.navigation.navigate("SignUpScreen")
							}
						>
							<Text style={applicationTheme.signInTextStyle}>
								Sign Up
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			{/* <View style={applicationTheme.view}>
                <Card style={applicationTheme.cardStyle}>
                    <Card.Title title="Logfin" titleStyle={applicationTheme.cardTitleStyle}></Card.Title>
                    <Card.Content>
                        
                            <TextInput label="Email" keyboardType="email-address"></TextInput>
                            <TextInput label="Password" secureTextEntry={passwordVisibility} right={<TextInput.Icon onPress={handlePasswordVisibility} icon="eye-off-outline"/>}></TextInput>
                            
                            <Button onPress={resetPw} style={{marginBottom: 35}}>Forgot email/password</Button>

                            <View style={{display: "flex", flexDirection: "row"}}>
                                <Text style={{marginTop: 10}}>Don't have an account yet?</Text>
                                <Button onPress={register} style={{padding: 0, borderRadius: 0}}>Sign Up</Button>
                            </View>
                            <Button onPress={login} mode="contained" style={applicationTheme.buttonStyle}>Login</Button>

                    </Card.Content>
                </Card>
            </View> */}
		</SafeAreaView>
	);
};

export default LoginScreen;
