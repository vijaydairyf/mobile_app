import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, View, TouchableOpacity} from "react-native";
import {Icon} from "react-native-elements";

import styles from "./styles";

const propTypes = {
    checked: PropTypes.bool,
    title: PropTypes.string,
    onPress: PropTypes.func
};

const defaultProps = {
    checked: false,
    title: "",
    onPress: () => {}
};

class CheckBox extends Component<{}> {

    render() {
        return (
            <View>
                <TouchableOpacity onPress={this.props.onPress} style={styles.checkboxCont}>
                    <Icon
                        name={this.props.checked ? "checkbox-marked" : "checkbox-blank-outline"}
                        type="material-community"
                        color="#3AB2E4"
                    />
                    <Text style={styles.termsPolicyTextStyle}>{this.props.title}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

CheckBox.defaultProps = defaultProps;

CheckBox.propTypes = propTypes;

export default CheckBox;
