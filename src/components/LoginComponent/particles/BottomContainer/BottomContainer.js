import React from "react";
import PropTypes from "prop-types";
import { Switch, Text, View } from "react-native";
import Card from "../Card/Card";
import Icon from "react-native-dynamic-vector-icons";
import styles, { container } from "./BottomContainer.style";

const BottomContainer = props => {
  const {
    switchText,
    switchValue,
    disableSwitch,
    IconComponent,
    usernameTitle,
    passwordTitle,
    backgroundColor,
    switchTextStyle,
    onPressSettings,
    disableSettings,
    contentComponent,
    usernamePlaceholder,
    passwordPlaceholder,
    onSwitchValueChange,
    usernameOnChangeText,
    passwordOnChangeText,
    usernameIconComponent,
    passwordIconComponent,
    usernameTextInputValue,
    passwordTextInputValue,
    repeatPasswordTitle,
    repeatPasswordTextInputValue,
    repeatPasswordPlaceholder,
    repeatPasswordIconComponent,
    onSignupClick,
    type
  } = props;
  return (
    <View style={container(backgroundColor)}>
      <Text style={styles.title}>{type === "register" ? "Register" : "Login"}</Text>
      <View style={styles.containerGlue}>
        <Card
          title={usernameTitle}
          value={usernameTextInputValue}
          placeholder={usernamePlaceholder}
          onChangeText={usernameOnChangeText}
          iconComponent={usernameIconComponent}
          {...props}
        />
        <Card
          name="key"
          secureTextEntry
          type="FontAwesome"
          title={passwordTitle}
          value={passwordTextInputValue}
          placeholder={passwordPlaceholder}
          onChangeText={text => passwordOnChangeText(text)}
          iconComponent={passwordIconComponent}
          {...props}
        />
        { type === "register" &&
        <Card
          name="key"
          secureTextEntry
          type="FontAwesome"
          title={repeatPasswordTitle}
          value={repeatPasswordTextInputValue}
          placeholder={repeatPasswordPlaceholder}
          iconComponent={repeatPasswordIconComponent}
          {...props}
        />
        }
      </View>
      <View style={styles.footerContainer}>
        <Text
          style={styles.switchTextStyle}
          onPress={() => onSignupClick()}>
          {type === "login" && "Sign Up!"}
          {type === "register" && "Login me In!"}
        </Text>
        {type === "register" && (
          <View style={styles.rememberMeContainer}>
            <Text style={styles.switchTextStyle}>
              I'm a Recruiter
            </Text>
            <Switch
              value={switchValue}
              ios_backgroundColor="black"
              onValueChange={onSwitchValueChange}
              trackColor={{ true: "default", false: "black" }}
            />
          </View>
        )}
      </View>
    </View>
  );
};

BottomContainer.propTypes = {
  switchText: PropTypes.string,
  disableSwitch: PropTypes.bool,
  passwordTitle: PropTypes.string,
  usernameTitle: PropTypes.string,
  disableSettings: PropTypes.bool,
  backgroundColor: PropTypes.string,
  usernamePlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string
};

BottomContainer.defaultProps = {
  IconComponent: Icon,
  disableSwitch: false,
  disableSettings: false,
  usernameTitle: "Username",
  passwordTitle: "Password",
  switchText: "Remember me",
  usernamePlaceholder: "Username",
  passwordPlaceholder: "Password",
  backgroundColor: "rgba(255,255,255,0.45)"
};

export default BottomContainer;
