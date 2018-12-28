import React, {Component} from "react";
import {Text, View} from "react-native";
import Config from "react-native-config";
import {Button} from "react-native-elements";
import PropTypes from "prop-types";

import Toolbar from "../../components/Toolbar";

import styles from "./styles";

const propTypes = {
    passwordForm: PropTypes.element,
    onHandlePassword: PropTypes.func
};

const defaultProps = {
    passwordForm: (<Text>Login Form</Text>),
    onHandlePassword: () => {}
};

class Password extends Component<{}> {

    render() {
        return (
            <View style={styles.appContainer}>
                <Toolbar title={Config.APP_TYPE === "corporate" ? "HAIS" : "mooON"} />
                <View style={styles.loginWrapper}>
                    {this.props.passwordForm}
                    <Text style={styles.passwordStrength}>Password Strength:</Text>
                    <View style={styles.viewInstructionsText}>
                        <Text style={styles.instructions}>Must not contain your name or email</Text>
                        <Text style={styles.instructions}>At least 8-12 characters</Text>
                        <Text style={styles.instructions}>Contains a upper case or a symbol or a number</Text>
                    </View>
                    <Button
                        raised
                        title="Submit"
                        backgroundColor="#3AB2E4"
                        containerViewStyle={styles.loginButtonStyle}
                        textStyle={styles.loginTextStyle}
                        onPress={this.props.onHandlePassword} />
                </View>
                <Text style={styles.copyrightText}>Copyright © 2018 Stellapps</Text>
            </View>
        );
    }
}

Password.defaultProps = defaultProps;

Password.propTypes = propTypes;

export default Password;
