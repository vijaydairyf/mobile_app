import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {View, Text} from "react-native";
import Config from "react-native-config";
import {reduxForm, Field} from "redux-form";
// import validator from "validator";

import InputText from "../../components/InputText";
import ForgotPassword from "../../templates/ForgotPassword";
import {navigateTo} from "../../utils/utility";

import styles from "./styles";

class ForgotPasswordContainer extends Component<{}> {

    onSubmit = (values) => {
        navigateTo("verifyOtp", {comingFrom: "forgotPassword"});
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
                    name="email"
                    label={Config.APP_TYPE === "corporate" ? "Mobile Number" : "Mobile Number"}
                    component={this.renderTextInput} />
            </View>);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={styles.appContainer}>
                <ForgotPassword loginForm={this.renderLoginForm()} onLogin={handleSubmit(this.onSubmit)} />
            </View>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.email) {
        errors.email = "Email is required";
    }
    if (!values.password) {
        errors.password = "Locality is required";
    }
    return errors;
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "forgotpassword", validate})
)(ForgotPasswordContainer);
