import {dpToPx} from "../../utils/utility";
import theme from "../../theme";

const styles = {
    appContainer: {
        flex: 1
    },
    welcomeText: {
        fontWeight: "500",
        paddingTop: dpToPx(8),
        paddingBottom: dpToPx(8),
        ...theme.h5
    },
    loginWrapper: {
        padding: dpToPx(8)
    },
    forgotPassword: {
        color: "#00b4e9",
        fontSize: dpToPx(6),
        paddingRight: dpToPx(4)
    },
    forgotPassButton: {
        alignSelf: "flex-end",
        marginBottom: dpToPx(8)
    },
    loginButtonStyle: {
        marginTop: dpToPx(8),
        marginLeft: dpToPx(4),
        marginRight: dpToPx(4),
        elevation: 4
    },
    googleTextStyle: {
        color: "#333333",
        fontWeight: "500",
        fontSize: dpToPx(7)
    },
    loginTextStyle: {
        fontWeight: "500",
        fontSize: dpToPx(7)
    },
    copyrightText: {
        textAlign: "center",
        fontSize: dpToPx(5.5),
        width: "100%",
        position: "absolute",
        bottom: dpToPx(8)
    },
    signUpText: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: dpToPx(8)
    },
    newMemberText: {
        color: "#16c2bf",
        fontSize: dpToPx(6)
    },
    signupButtonText: {
        color: "#14beed",
        marginLeft: dpToPx(2),
        fontSize: dpToPx(6)
    }
};

export default styles;
