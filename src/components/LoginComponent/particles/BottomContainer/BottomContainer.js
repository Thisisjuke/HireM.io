import React from 'react';
import PropTypes from 'prop-types';
import {Switch} from 'react-native-paper';

import {
  StyledContainer,
  StyledContainerContent,
  StyledTitle,
  StyledFooterContainer,
  StyledRmeContainer,
  StyledSwitchText,
} from './styles';
import Card from '../Card/Card';

const BottomContainer = props => {
  const {
    switchValue,
    usernameTitle,
    passwordTitle,
    usernamePlaceholder,
    passwordPlaceholder,
    onSwitchValueChange,
    repeatPasswordTitle,
    repeatPasswordPlaceholder,
    usernameUpdateInput,
    passwordUpdateInput,
    repeatPasswordUpdateInput,
    usernameInputValue,
    passwordInputValue,
    repeatPasswordInputValue,
    onSignupClick,
    type,
  } = props;

  return (
    <StyledContainer>
      <StyledTitle>
        {type === 'register' ? 'Inscription' : 'Connectez-vous !'}
      </StyledTitle>
      <StyledContainerContent>
        <Card
          title={usernameTitle}
          value={usernameInputValue}
          placeholder={usernamePlaceholder}
          onChangeText={usernameUpdateInput}
          autoCompleteType="email"
          {...props}
        />
        <Card
          name="key"
          secureTextEntry
          title={passwordTitle}
          value={passwordInputValue}
          placeholder={passwordPlaceholder}
          onChangeText={passwordUpdateInput}
          {...props}
        />
        {type === 'register' && (
          <Card
            name="key"
            secureTextEntry
            title={repeatPasswordTitle}
            value={repeatPasswordInputValue}
            placeholder={repeatPasswordPlaceholder}
            onChangeText={repeatPasswordUpdateInput}
            {...props}
          />
        )}
      </StyledContainerContent>
      <StyledFooterContainer>
        <StyledSwitchText onPress={() => onSignupClick()}>
          {type === 'login' && "Je veux m'inscrire !"}
          {type === 'register' && 'Me connecter !'}
        </StyledSwitchText>
        {type === 'register' && (
          <StyledRmeContainer>
            <StyledSwitchText>Je suis un recruteur.</StyledSwitchText>
            <Switch
              value={switchValue}
              onValueChange={onSwitchValueChange}
              color="#0062ff"
            />
          </StyledRmeContainer>
        )}
      </StyledFooterContainer>
    </StyledContainer>
  );
};

BottomContainer.propTypes = {
  switchText: PropTypes.string,
  disableSwitch: PropTypes.bool,
  passwordTitle: PropTypes.string,
  usernameTitle: PropTypes.string,
  disableSettings: PropTypes.bool,
  usernamePlaceholder: PropTypes.string,
  passwordPlaceholder: PropTypes.string,
};

BottomContainer.defaultProps = {
  disableSwitch: false,
  disableSettings: false,
  usernameTitle: 'Username',
  passwordTitle: 'Password',
  switchText: 'Remember me',
  usernamePlaceholder: 'Username',
  passwordPlaceholder: 'Password',
};

export default BottomContainer;
