import React from "react";
import {Text, TextInput, Image, KeyboardTypeOptions} from "react-native";
import {applicationTheme} from "../Screens/appTheme";

const TextFields = ({ keyboardType, textName, marginBottom = 0, }: { keyboardType?: KeyboardTypeOptions; textName?: string; marginBottom?: number }) => {
	return (
		<>
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
				        {textName || "Text"}

			</Text>
			<TextInput
				style={{
					backgroundColor: "transparent",
					marginTop: 19,
					marginLeft: 0,
					borderWidth: 0,
                    fontFamily: "Inter_600SemiBold",
				}}
                keyboardType={keyboardType || 'default'}
				// underlineColor="transparent"
				selectionColor={"black"}
				// activeUnderlineColor="transparent"
			/>
			<Image
				source={require("../assets/rectangle.png")}
				style={{
					width: 350,
					height: 3,
					borderRadius: 90,
                    marginBottom: marginBottom,
				}}
			/>
		</>
	);
};

export default TextFields;
