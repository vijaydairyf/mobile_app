import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {View, Text} from "react-native";
import {reduxForm, Field} from "redux-form";
// import validator from "validator";

import InputText from "../../components/InputText";
import Register from "../../templates/Register";
import {navigateTo} from "../../utils/utility";
import {checkUserExist} from "../../utils/authenticate.utils";

import styles from "./styles";

class RegisterContainer extends Component<{}> {

    onSubmit = (values) => {
        if (values && values.phone) {
            checkUserExist(values.phone, (otp, username) => {
                navigateTo("verifyOtp", {username, comingFrom: "signup"});
            });
        }
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

    renderSignUpForm = () => {
        return (
            <View>
                <Field
                    name="phone"
                    label="Mobile Number"
                    maxLength={10}
                    keyboardType="phone-pad"
                    component={this.renderTextInput} />
            </View>);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={styles.appContainer}>
                <Register signupForm={this.renderSignUpForm()} onSignup={handleSubmit(this.onSubmit)} />
            </View>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.phone) {
        errors.phone = "Phone is required";
    }
    return errors;
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "register", validate})
)(RegisterContainer);
