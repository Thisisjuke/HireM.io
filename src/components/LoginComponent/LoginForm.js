import React from "react";
import PropTypes from "prop-types";
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import Spinner from "react-native-spinkit";

import Logo from "./particles/Logo/Logo";
import styles, { container } from "./LoginForm.style";
import BottomContainer from "./particles/BottomContainer/BottomContainer";

const defaultBackground =
  "https://images.unsplash.com/photo-1543637005-4d639a4e16de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1481&q=80";

const LoginForm = props => {
  const {
    source,
    loginText,
    spinnerType,
    spinnerSize,
    spinnerColor,
    onPressLogin,
    onPressRegister,
    spinnerStyle,
    spinnerEnable,
    spinnerVisibility,
    loginButtonTextStyle,
    loginButtonBackgroundColor,
    type
  } = props;

  const renderSpinner = () => (
    <View style={styles.spinnerStyle}>
      <Spinner
        size={spinnerSize}
        type={spinnerType}
        style={spinnerStyle}
        color={spinnerColor}
        isVisible={spinnerVisibility}
      />
    </View>
  );

  const renderLoginButton = () => (
    <>
      {type === "login" &&
        <TouchableOpacity style={styles.loginButtonStyle} onPress={onPressLogin}>
          <Text style={loginButtonTextStyle}>LOGIN</Text>
        </TouchableOpacity>
      }
      {type === "register" &&
      <TouchableOpacity style={styles.loginButtonStyle} onPress={onPressRegister}>
        <Text style={loginButtonTextStyle}>REGISTER</Text>
      </TouchableOpacity>
      }
    </>
  );

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={container(loginButtonBackgroundColor)}
    >
      <View style={container(loginButtonBackgroundColor)}>
        <ImageBackground
          source={source}
          borderRadius={24}
          resizeMode="cover"
          style={styles.imagebackgroundStyle}
        >
          <View style={styles.blackoverlay}>
            <SafeAreaView style={styles.safeAreaViewStyle}>
              <View style={styles.loginContainer}>
                <Logo logoText="HireM.io" />
              </View>
              <BottomContainer {...props} signupText="Sign Up!" />
            </SafeAreaView>
          </View>
        </ImageBackground>
        {spinnerEnable && spinnerVisibility
          ? renderSpinner()
          : renderLoginButton()}
      </View>
    </KeyboardAvoidingView>
  );
};

LoginForm.propTypes = {
  spinnerEnable: PropTypes.bool,
  spinnerType: PropTypes.string,
  spinnerSize: PropTypes.number,
  spinnerColor: PropTypes.string,
  spinnerVisibility: PropTypes.bool,
  loginButtonBackgroundColor: PropTypes.string
};

LoginForm.defaultProps = {
  spinnerSize: 30,
  spinnerEnable: false,
  spinnerColor: "#fdfdfd",
  spinnerVisibility: false,
  spinnerType: "ThreeBounce",
  source: { uri: defaultBackground },
  loginButtonBackgroundColor: "#282828",
  loginButtonTextStyle: styles.loginButtonTextStyle
};

export default LoginForm;
