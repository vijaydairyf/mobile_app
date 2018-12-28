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

class CreateNewPassword extends Component<{}> {

    render() {
        return (
            <View style={styles.appContainer}>
                <Toolbar title={Config.APP_TYPE === "corporate" ? "HAIS" : "mooON"} />
                <View style={styles.loginWrapper}>
                    <Text style={styles.welcomeText}>Create New Password</Text>
                    {this.props.loginForm}
                    <Text style={styles.instructions}>Must not contain your name or email</Text>
                    <Text style={styles.instructions}>At least 8-12 characters</Text>
                    <Text style={styles.instructions}>Contains a upper case or a symbol or a number</Text>
                    <Button
                        raised
                        title="Reset Password"
                        backgroundColor="#3AB2E4"
                        containerViewStyle={styles.loginButtonStyle}
                        textStyle={styles.loginTextStyle}
                        onPress={this.props.onLogin} />
                </View>
                <Text style={styles.copyrightText}>Copyright © 2018 Stellapps</Text>
            </View>
        );
    }
}

CreateNewPassword.defaultProps = defaultProps;

CreateNewPassword.propTypes = propTypes;

export default CreateNewPassword;
