import {connect} from "react-redux";
import React, {Component} from "react";
import {View} from "react-native";
import PropTypes from "prop-types";
// import validator from "validator";

import {verifyOtpRequest} from "../../utils/authenticate.utils";
import VerifyOtp from "../../templates/VerifyOtp";
import {navigateTo} from "../../utils/utility";
import {activateAccountAction} from "../../actions/authActions";

import styles from "./styles";

const propTypes = {
    username: PropTypes.string,
    comingFrom: PropTypes.string,
    activateAccount: PropTypes.func
};

const defaultProps = {
    username: "",
    comingFrom: "",
    activateAccount: () => {}
};

class VerifyOtpContainer extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            otp: ""
        };
    }

    getOtp = (otp) => {
        this.setState({
            otp
        });
    }

    onVerifyOtp = () => {
        const payload = {
            username: this.props.username,
            otp: this.state.otp
        };
        verifyOtpRequest(payload, (data) => {
            if (data) {
                this.props.activateAccount(data);
                if (this.props.comingFrom === "signup") {
                    navigateTo("password");
                } else {
                    navigateTo("createPassword");
                }
            }
        });
    }

    render() {
        return (
            <View style={styles.appContainer}>
                <VerifyOtp handleVerifyOtp={this.onVerifyOtp} handleGetOtp={this.getOtp} />
            </View>
        );
    }
}

VerifyOtpContainer.defaultProps = defaultProps;

VerifyOtpContainer.propTypes = propTypes;

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    activateAccount: payload => dispatch(activateAccountAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(VerifyOtpContainer);
