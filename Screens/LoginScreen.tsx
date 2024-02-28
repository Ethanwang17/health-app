import React from "react";
import {View, Image, SafeAreaView, TouchableOpacity} from "react-native";
import {Button, Card, TextInput, Text} from "react-native-paper";
import {applicationTheme} from "./appTheme";
import {useTogglePasswordVisibility} from "./pwVisibility";
import {transparent} from "react-native-paper/lib/typescript/styles/themes/v2/colors";

interface LoginScreenProps {
	navigation: any;
}

const LoginScreen = (props: LoginScreenProps) => {
	const resetPw = () => props.navigation.navigate("PwResetScreen");
	const login = () => props.navigation.navigate("BtDeviceScreen");
	const register = () => props.navigation.navigate("RegisterScreen");

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
					Welcome!
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
						width: 387,
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
					onPress={() => props.navigation.navigate("WelcomeScreen")}
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
						Sign In
					</Text>
				</Button>
				<Text
					style={[
						applicationTheme.welcomeTextStyle,
						{fontFamily: "Inter_600SemiBold", fontSize: 14, paddingTop: 20},
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
							onPress={() => props.navigation.navigate("RegisterScreen")}
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
