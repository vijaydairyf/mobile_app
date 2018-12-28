import theme from "../../theme";

import {dpToPx} from "../../utils/utility";

const styles = {
    modalContainer: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: dpToPx(14),
        justifyContent: "center",
        alignItems: "center"
    },
    modalWrapper: {
        width: "100%",
        height: "auto",
        backgroundColor: "#ffffff",
        paddingHorizontal: dpToPx(12),
        paddingTop: dpToPx(12),
        paddingBottom: dpToPx(6)
    },
    modalTitle: {
        ...theme.modalTitle,
        paddingBottom: dpToPx(10)
    },
    modalContent: {
        ...theme.modalBody
    },
    buttonCont: {
        paddingTop: dpToPx(12),
        flexDirection: "row",
        justifyContent: "flex-end"
    }
};

export default styles;
