import {dpToPx} from "../../utils/utility";

const styles = {
    appContainer: {
        flex: 1
    },
    welcomeText: {
        fontSize: dpToPx(14),
        fontWeight: "500",
        paddingTop: dpToPx(8),
        paddingBottom: dpToPx(8),
        color: "#286F8B"
    },
    loginWrapper: {
        padding: dpToPx(8)
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
    receiveSmsText: {
        color: "#286F8B",
        marginTop: dpToPx(8),
        marginLeft: dpToPx(5)
    },
    registeredMobileNumber: {
        color: "#50BCBA",
        textAlign: "center"
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
