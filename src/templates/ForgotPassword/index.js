import React, {Component} from "react";
import {Text, View} from "react-native";
import Config from "react-native-config";
import {Button} from "react-native-elements";
import PropTypes from "prop-types";

import Toolbar from "../../components/Toolbar";

import styles from "./styles";

const propTypes = {
    loginForm: PropTypes.element,
    onLogin: PropTypes.func
};

const defaultProps = {
    loginForm: (<Text>Login Form</Text>),
    onLogin: () => {}
};

class ForgotPassword extends Component<{}> {

    render() {
        return (
            <View style={styles.appContainer}>
                <Toolbar title={Config.APP_TYPE === "corporate" ? "HAIS" : "mooON"} />
                <View style={styles.loginWrapper}>
                    <Text style={styles.welcomeText}>Forgot Password</Text>
                    <Text style={styles.registeredMobileNumber}>Please enter your Registered mobile number and</Text>
                    <Text style={styles.registeredMobileNumber}>we will send an OTP number.</Text>
                    {this.props.loginForm}
                    <Button
                        raised
                        title="Send"
                        backgroundColor="#3AB2E4"
                        containerViewStyle={styles.loginButtonStyle}
                        textStyle={styles.loginTextStyle}
                        onPress={this.props.onLogin} />
                    <Text style={styles.receiveSmsText}>You'll receive an SMS to verify your phone number.</Text>
                </View>
                <Text style={styles.copyrightText}>Copyright © 2018 Stellapps</Text>
            </View>
        );
    }
}

ForgotPassword.defaultProps = defaultProps;

ForgotPassword.propTypes = propTypes;

export default ForgotPassword;
