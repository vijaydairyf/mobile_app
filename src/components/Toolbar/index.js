import React, {Component} from "react";
import {Text, View} from "react-native";

import styles from "./styles";

class Toolbar extends Component<{}> {

    render() {
        return (
            <View style={styles.toolbarContainer}>
                <Text style={styles.toolbarTitle}>{this.props.title}</Text>
            </View>
        );
    }
}

export default Toolbar;
