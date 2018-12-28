import React, {Component} from "react";
import {Text, View} from "react-native";
import Config from "react-native-config";
import {Button} from "react-native-elements";
import CodeInput from "react-native-confirmation-code-input";
import PropTypes from "prop-types";

import Toolbar from "../../components/Toolbar";

import styles from "./styles";

const propTypes = {
    handleGetOtp: PropTypes.func,
    handleVerifyOtp: PropTypes.func
};

const defaultProps = {
    handleGetOtp: () => {},
    handleVerifyOtp: () => {}
};

class VerifyOtp extends Component<{}> {

    render() {
        return (
            <View style={styles.appContainer}>
                <Toolbar title={Config.APP_TYPE === "corporate" ? "HAIS" : "mooON"} />
                <View style={styles.loginWrapper}>
                    <Text style={styles.verifyMobileNumber}>Verify your Mobile Number.</Text>
                    <Text style={styles.verifyMobileNumber}>Enter your OTP here.</Text>
                    <CodeInput
                        secureTextEntry
                        codeLength={4}
                        className="border-b"
                        space={8}
                        size={30}
                        inputPosition="center"
                        inactiveColor="#000"
                        activeColor="#33ccff"
                        codeInputStyle={styles.codeInput}
                        onFulfill={this.props.handleGetOtp} />
                    <Button
                        raised
                        title="Verify"
                        backgroundColor="#3AB2E4"
                        containerViewStyle={styles.loginButtonStyle}
                        textStyle={styles.loginTextStyle}
                        onPress={this.props.handleVerifyOtp} />
                    <Text style={styles.didnotGetCode}>Didn't get the Code? Resend code.</Text>
                </View>
                <Text style={styles.copyrightText}>Copyright © 2018 Stellapps</Text>
            </View>
        );
    }
}

VerifyOtp.defaultProps = defaultProps;

VerifyOtp.propTypes = propTypes;

export default VerifyOtp;
