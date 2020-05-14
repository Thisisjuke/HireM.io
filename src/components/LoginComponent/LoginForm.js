import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, SafeAreaView, KeyboardAvoidingView} from 'react-native';

import {
  StyledSpinner,
  StyledTouchable,
  StyledTouchableRegister,
  StyledLoggingButton,
  StyledLoginContainer,
  container,
} from './styles';
import Logo from './particles/Logo/Logo';
import BottomContainer from './particles/BottomContainer/BottomContainer';

const LoginForm = props => {
  const {
    spinnerType,
    spinnerSize,
    spinnerColor,
    onPressLogin,
    onPressRegister,
    spinnerStyle,
    spinnerEnable,
    spinnerVisibility,
    loginButtonBackgroundColor,
    type,
  } = props;

  const renderSpinner = () => (
    <StyledSpinner>
      <Spinner
        size={spinnerSize}
        type={spinnerType}
        style={spinnerStyle}
        color={spinnerColor}
        isVisible={spinnerVisibility}
      />
    </StyledSpinner>
  );

  const renderLoginButton = () => (
    <>
      {type === 'login' && (
        <StyledTouchable onPress={onPressLogin}>
          <StyledLoggingButton mode="contained">
            <Text style={{color: '#0062ff'}}>Se connecter</Text>
          </StyledLoggingButton>
        </StyledTouchable>
      )}
      {type === 'register' && (
        <StyledTouchableRegister onPress={onPressRegister}>
          <StyledLoggingButton mode="contained">
            <Text style={{color: '#0062ff'}}>S'inscrire</Text>
          </StyledLoggingButton>
        </StyledTouchableRegister>
      )}
    </>
  );

  return (
    <KeyboardAvoidingView
      behavior="position"
      style={container(loginButtonBackgroundColor)}>
      <View style={container(loginButtonBackgroundColor)}>
        <SafeAreaView>
          <StyledLoginContainer>
            <Logo logoText="Bienvenue sur Hirem.io !" />
          </StyledLoginContainer>
          <BottomContainer {...props} signupText="Sign Up!" />
        </SafeAreaView>
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
  loginButtonBackgroundColor: PropTypes.string,
};

LoginForm.defaultProps = {
  spinnerSize: 30,
  spinnerEnable: false,
  spinnerColor: '#fafafb',
  spinnerVisibility: false,
  spinnerType: 'ThreeBounce',
  loginButtonBackgroundColor: '#0062ff',
};

export default LoginForm;
