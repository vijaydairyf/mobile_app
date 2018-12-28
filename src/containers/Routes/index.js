import React, {Component} from "react";
import {Router, Scene} from "react-native-router-flux";

import RegisterContainer from "../RegisterContainer";
import LoginContainer from "../LoginContainer";
import ForgotPasswordContainer from "../ForgotPasswordContainer";
import VerifyOtpContainer from "../VerifyOtpContainer";
import CreateNewPasswordContainer from "../CreateNewPasswordContainer";
import PasswordContainer from "../PasswordContainer";

export default class Routes extends Component<{}> {

    render() {
        // const {isLoggedin} = this.props;
        return (
            <Router>
                <Scene>
                    <Scene key="auth" hideNavBar={true} initial={true}>
                        <Scene key="signup" component={RegisterContainer} title="Signup" />
                        <Scene key="login" component={LoginContainer} title="Login" />
                        <Scene key="forgotPassword" component={ForgotPasswordContainer} title="Forgot Password" />
                        <Scene key="verifyOtp" component={VerifyOtpContainer} title="Verify Otp" />
                        <Scene key="createNewPassword" component={CreateNewPasswordContainer} title="Create Password" />
                        <Scene key="password" component={PasswordContainer} title="Password" />
                    </Scene>
                </Scene>
            </Router>
        );
    }
}
