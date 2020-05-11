import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-dynamic-vector-icons";

const Logo = () => {
  return (
    <View style={styles.row}>
      <Text style={styles.textStyle}>HireM.io</Text>
      <View style={styles.iconStyle}>
        <Icon
          size={30}
          name="github"
          color="white"
          type="AntDesign"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    color: "white"
  },
  row: {
    marginTop: "30%",
    alignItems: "center",
    flexDirection: "row"
  },
  iconStyle: { marginLeft: 12 }
})

export default Logo;
