import {dpToPx} from "../../utils/utility";
import theme from "../../theme";

const styles = {
    appContainer: {
        flex: 1
    },
    welcomeText: {
        paddingTop: dpToPx(8),
        paddingBottom: dpToPx(8),
        ...theme.h5
    },
    signupWrapper: {
        padding: dpToPx(8)
    },
    signupButtonStyle: {
        marginTop: dpToPx(8),
        marginLeft: dpToPx(4),
        marginRight: dpToPx(4),
        elevation: 4
    },
    signupTextStyle: {
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
    },
    veryfySmsTextStyle: {
        fontSize: dpToPx(6),
        color: "#286F8B",
        textAlign: "center",
        width: "100%",
        paddingTop: dpToPx(8)
    }
};

export default styles;
