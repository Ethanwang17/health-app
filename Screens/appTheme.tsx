import {StyleSheet} from "react-native";

export const applicationTheme = StyleSheet.create({
    loginContent: {
        display: "flex",
        flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "rgb(193,251,252)"
    },
    view: {
        width: "90%"
    },
    cardStyle: {
        backgroundColor: "white"
    },
    cardTitleStyle: {
        color: "rgb(30,144,255)",
        fontSize: 25,
        fontWeight: "bold"
    },
    buttonStyle: {
        margin: 20,
        marginLeft: 0,
        marginRight: 0, 
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "rgb(68,184,143)",
        width: 350,
        height: 55
    },
    smallerBtnStyle: {
        backgroundColor: "rgb(68,184,143)",
        width: 200,
        height: 40,
        alignSelf: "center"
    },
    signUpBtnStyle: {
        margin: 0
    },
    regContent: {
        padding: 15,
        paddingTop: 0,
        textAlignVertical: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(193,251,252)"
    },
    pwResetContent: {
        display: "flex",
        flex: 1,
        flexWrap: "wrap",
        padding: 15,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 15,
        textAlign: "center",
        paddingBottom: 20,
        color: "rgb(96,96,96)"
    },
    backgroundStyle: {
        display: "flex",
        flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        fontSize: 18,
        backgroundColor: "rgb(193,251,252)"
    },
    welcomeTextStyle: {
        textAlign: "center",
        color: "rgb(30,144,255)",
        fontSize: 23,
        paddingBottom: 30
    },
    imagePosition: {
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 150
    },
    welcomeSpacing: {
        paddingTop: 100,
        paddingBottom: 50
    },
    bottomSpacing: {
        justifyContent: "center",
    },
    darkText: {
        justifyContent: 'center',
        alignItems: "center",
        textAlign: "center",
        color: "black",
        fontWeight: "bold",
        marginVertical: 160
    },
    backgroundTheme2: {
        display: "flex",
        flex: 1,
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontSize: 18,
        backgroundColor: "rgb(193,251,252)"
    }
})