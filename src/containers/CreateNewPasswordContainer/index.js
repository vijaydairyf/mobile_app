import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {View, Text} from "react-native";
import Config from "react-native-config";
import {reduxForm, Field} from "redux-form";
// import validator from "validator";

import InputText from "../../components/InputText";
import CreateNewPassword from "../../templates/CreateNewPassword";
import {navigateTo} from "../../utils/utility";

import styles from "./styles";

class CreateNewPasswordContainer extends Component<{}> {

    onSubmit = (values) => {
        navigateTo("login");
        console.log(values);
    }

    renderTextInput = (field) => {
        const {meta: {touched, error}, label, secureTextEntry, maxLength, keyboardType, placeholder, input: {onChange, ...restInput}} = field;
        return (
            <View>
                <InputText
                    onChangeText={onChange}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    keyboardType={keyboardType}
                    secureTextEntry={secureTextEntry}
                    label={label}
                    {...restInput} />
                <Text style={styles.errorText}>{touched ? error : ""}</Text>
            </View>
        );
    }

    renderLoginForm = () => {
        return (
            <View>
                <Field
                    name="password"
                    label={Config.APP_TYPE === "corporate" ? "New Password" : "New Password"}
                    component={this.renderTextInput} />
                <Text style={styles.passwordStrength}>Password Strength:</Text>
                <Field
                    name="confirmPassword"
                    secureTextEntry={true}
                    label={Config.APP_TYPE === "corporate" ? "Confirm Password" : "Confirm Password"}
                    component={this.renderTextInput} />
            </View>);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={styles.appContainer}>
                <CreateNewPassword loginForm={this.renderLoginForm()} onLogin={handleSubmit(this.onSubmit)} />
            </View>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = "Password is required";
    }
    if (!values.confirmPassword) {
        errors.confirmPassword = "ConfirmPassword is required";
    }
    return errors;
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "createPassword", validate})
)(CreateNewPasswordContainer);
