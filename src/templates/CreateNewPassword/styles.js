import {dpToPx} from "../../utils/utility";

const styles = {
    appContainer: {
        flex: 1
    },
    welcomeText: {
        fontSize: dpToPx(12),
        fontWeight: "500",
        paddingTop: dpToPx(8),
        paddingBottom: dpToPx(8),
        color: "#286F8B"
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
    loginTextStyle: {
        fontWeight: "500",
        fontSize: dpToPx(7)
    },
    instructions: {
        textAlign: "center",
        color: "#50BCBA"
    },
    copyrightText: {
        textAlign: "center",
        fontSize: dpToPx(5.5),
        width: "100%",
        position: "absolute",
        bottom: dpToPx(8)
    }
};

export default styles;
