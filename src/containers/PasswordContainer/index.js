import {connect} from "react-redux";
import {compose} from "redux";
import React, {Component} from "react";
import {View, Text} from "react-native";
import {reduxForm, Field} from "redux-form";

import InputText from "../../components/InputText";
import Password from "../../templates/Password";
import {navigateTo} from "../../utils/utility";
import {handleRegisterPassword} from "../../utils/authenticate.utils";

import styles from "./styles";

class PasswordContainer extends Component<{}> {

    onSubmit = (values) => {
        handleRegisterPassword(values, this.props.token);
        // navigateTo("login");
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

    renderPasswordForm = () => {
        return (
            <View>
                <Field
                    name="password"
                    label="Password"
                    component={this.renderTextInput} />
            </View>);
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <View style={styles.appContainer}>
                <Password
                    passwordForm={this.renderPasswordForm()}
                    onHandlePassword={handleSubmit(this.onSubmit)} />
            </View>
        );
    }
}

const validate = (values) => {
    const errors = {};
    if (!values.password) {
        errors.password = "Password is required";
    }
    return errors;
};

const mapStateToProps = state => ({
    token: state.authReducer.token
});

const mapDispatchToProps = dispatch => ({

});

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    reduxForm({form: "password", validate})
)(PasswordContainer);
