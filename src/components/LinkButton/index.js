import PropTypes from "prop-types";
import React, {Component} from "react";
import {Text, TouchableOpacity} from "react-native";

import styles from "./styles";

const propTypes = {
    title: PropTypes.string,
    onPress: PropTypes.func
};

const defaultProps = {
    title: "",
    onPress: () => {}
};

class LinkButton extends Component<{}> {

    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={styles.linkButtonCont}>
                <Text style={styles.linkButtonTextStyle}>{this.props.title}</Text>
            </TouchableOpacity>
        );
    }
}

LinkButton.defaultProps = defaultProps;

LinkButton.propTypes = propTypes;

export default LinkButton;
