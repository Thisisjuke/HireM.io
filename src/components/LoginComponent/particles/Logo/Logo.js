import React from "react";
import { Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import styles from "./Logo.style";

const Logo = props => {
  const { logoText } = props;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.textStyle}>{logoText}</Text>
        <View style={styles.iconStyle}>
          <Icon
            size={30}
            name="compass-alt"
            color="white"
            type="Fontisto"
          />
        </View>
      </View>
    </View>
  );
};

export default Logo;
