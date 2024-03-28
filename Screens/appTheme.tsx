import {StyleSheet} from "react-native";

export const applicationTheme = StyleSheet.create({
	loginContent: {
		display: "flex",
		flex: 1,
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		backgroundColor: "#F2F8F6",
	},
	view: {
		width: "90%",
	},
	cardStyle: {
		backgroundColor: "white",
	},
	cardTitleStyle: {
		color: "rgb(30,144,255)",
		fontSize: 25,
		fontWeight: "bold",
	},
	buttonStyle: {
		marginVertical: 10,
		alignSelf: "center",
		justifyContent: "center",
		backgroundColor: "#153D45",
		width: 350,
		height: 55,
	},
	smallerBtnStyle: {
		backgroundColor: "rgb(68,184,143)",
		width: 200,
		height: 40,
		alignSelf: "center",
	},
	signUpBtnStyle: {
		margin: 0,
	},
	buttonText: {
		color: "white",
	},
	regContent: {
		padding: 15,
		paddingTop: 0,
		textAlignVertical: "center",
		justifyContent: "center",
		backgroundColor: "#15463E",
	},
	pwResetContent: {
		display: "flex",
		flex: 1,
		flexWrap: "wrap",
		padding: 15,
		paddingTop: 0,
	},
	textStyle: {
		fontSize: 15,
		textAlign: "center",
		paddingBottom: 20,
		color: "rgb(96,96,96)",
	},
	backgroundStyle: {
		flex: 1,
		// backgroundColor: "#15463E",
	},
	welcomeTextStyle: {
		textAlign: "center",
	},
	imagePosition: {
		justifyContent: "center",
		alignItems: "center",
		paddingBottom: 24,
	},
	welcomeSpacing: {
		paddingTop: 50,
		paddingBottom: 100,
	},
	welcomeLogo: {
		paddingTop: 144, // Adjust this value as needed
		alignItems: "center", // Center the content horizontally
		position: "absolute",
		top: 0,
		left: 0,
		right: 0,
	},
	bottomSpacing: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		backgroundColor: "#fff",
		borderRadius: 30,
		padding: 40,
	},
	darkText: {
		justifyContent: "center",
		alignItems: "center",
		textAlign: "center",
		color: "black",
		fontWeight: "bold",
		marginVertical: 160,
	},
	backgroundTheme2: {
		display: "flex",
		flex: 1,
		flexGrow: 1,
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		fontSize: 18,
		backgroundColor: "rgb(193,251,252)",
	},
	titleTextStyle: {
		textAlign: "left",
		color: "#153D45",
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
	container: {
		flex: 1,
		justifyContent: "flex-end",
		marginBottom: 36,
		alignItems: "center",
	},
	footerTextStyle: {
		fontFamily: "Inter_600SemiBold",
		fontSize: 15,
	},
	fotterTextAlign: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	input: {
		backgroundColor: "transparent",
		marginBottom: -15,
		marginLeft: -15,
		borderWidth: 0,
	},
	signInTextStyle: {
		color: "#407A71",
		fontFamily: "Inter_600SemiBold",
		fontSize: 15,
	},
	onboardHeader: {
		justifyContent: "center",
		alignItems: "center",
		paddingTop: 40,
	},
	profileCircle: {
		width: 200,
		height: 200,
		borderRadius: 100,
		backgroundColor: "#153D45",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{translateX: -100}, {translateY: -100}],
	},
	verticalPlusCircle: {
		width: 8,
		height: 66,
		borderRadius: 50,
		backgroundColor: "#F2F8F6",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{translateX: -4}, {translateY: -33}],
	},
	horizontalPlusCircle: {
		width: 66,
		height: 8,
		borderRadius: 50,
		backgroundColor: "#F2F8F6",
		position: "absolute",
		top: "50%",
		left: "50%",
		transform: [{translateX: -33}, {translateY: -4}],
	},
	healthConnectImage: {
		width: 319,
		height: 93,
	},
	lockImage: {
		width: 208,
		height: 208,
	},
	HomepageHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center", 
		paddingHorizontal: 30,
		marginTop: 80,
		paddingBottom: -200,
	},
	circle: {
        width: 189,
        height: 189,
        borderRadius: 95,
        backgroundColor: "#F2F8F6",
        justifyContent: 'center',
        alignItems: 'center',
    },
	ProfileHeader: {
		
		justifyContent: "space-between",
		alignItems: "center", 
		paddingHorizontal: 30,
		marginTop: 70,
		paddingBottom: -200,
	},
	NavigationHeader: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center", 
		paddingHorizontal: 30,

	},
});
