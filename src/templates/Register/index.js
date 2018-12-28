import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import Config from "react-native-config";
import {Button} from "react-native-elements";
import PropTypes from "prop-types";

import ModalSmall from "../../components/ModalSmall";
import Toolbar from "../../components/Toolbar";
import CheckBox from "../../components/CheckBox";
import {navigateTo} from "../../utils/utility";

import styles from "./styles";

const propTypes = {
    signupForm: PropTypes.element,
    onSignup: PropTypes.func
};

const defaultProps = {
    signupForm: (<Text>Login Form</Text>),
    onSignup: () => {}
};

class Register extends Component<{}> {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            showModal: false
        };
    }

    componentWillUnmount() {
        this.setState({
            showModal: false
        });
    }

    openTermsModal = () => {
        this.setState({
            showModal: true
        });
    }

    closeTermsModal = () => {
        this.setState({
            showModal: false,
            checked: false
        });
    }

    acceptTermsAndCondition = () => {
        this.setState({
            showModal: false,
            checked: true
        });
    }

    render() {
        return (
            <View style={styles.appContainer}>
                <Toolbar title={Config.APP_TYPE === "corporate" ? "HAIS" : "mooON"} />
                <View style={styles.signupWrapper}>
                    <Text style={styles.welcomeText}>Welcome Back!</Text>
                    {this.props.signupForm}
                    <CheckBox
                        title="I agree to stellapps Term of Use and Privacy Policy"
                        checked={this.state.checked}
                        onPress={this.openTermsModal}
                    />
                    <Button
                        raised
                        title="Sign Up"
                        backgroundColor="#3AB2E4"
                        containerViewStyle={styles.signupButtonStyle}
                        textStyle={styles.signupTextStyle}
                        onPress={this.props.onSignup} />
                    <View style={styles.signUpText}>
                        <Text style={styles.newMemberText}>Already Member?</Text>
                        <TouchableOpacity onPress={() => navigateTo("login")}>
                            <Text style={styles.signupButtonText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                    {this.state.checked && <Text style={styles.veryfySmsTextStyle}>You will receive an SMS to verify your phone number</Text>}
                </View>
                <Text style={styles.copyrightText}>Copyright © 2018 Stellapps</Text>
                {this.state.showModal
                    && <ModalSmall
                        showModal={this.state.showModal}
                        title="Terms of Use"
                        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco"
                        buttonCancelText="Don't Agree"
                        buttonOkText="Agree"
                        onPressCancel={this.closeTermsModal}
                        onPressOk={this.acceptTermsAndCondition}
                    />
                }
            </View>
        );
    }
}


Register.defaultProps = defaultProps;

Register.propTypes = propTypes;

export default Register;
