import React, {useContext, useState} from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import LoginForm from '../../components/LoginComponent/LoginForm';
import {setUserToken} from '../../services/Auth';
import {AuthContext} from '../../contexts/AuthContext';
import {
  FmCreatedAccount,
  FmMissingField,
  FmNotMatchingPass,
  FmNotStrongEnoughPass,
  FmInvalidEmail,
  FmErrorWhileFetch,
  FmInvalidUserCredential,
} from '../../services/FlashMessages';
import {checkPassword, checkEmail} from '../../services/RegexChecker';
import {createUser, logUser} from '../../api/User';

const LoginScreen = () => {
  const [authenticated, setAuthenticated] = useContext(AuthContext);

  const [isLoading, setLoading] = useState(false);
  const [isLogging, setLogging] = useState(true);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [isCheckedSwitch, setCheckedSwitch] = useState(false);

  const submitLogin = () => {
    setLoading(true);
    if (email === null || password === null) {
      FmMissingField();
      setLoading(false);
      return;
    }
    if (!checkEmail(email)) {
      FmInvalidEmail();
      setLoading(false);
      return;
    }
    logUser(
      {email, password},
      res => {
        setLoading(false);
        setUserToken(res.token);
        setAuthenticated(res);
      },
      () => {
        FmInvalidUserCredential();
        setPassword(null);
        setLoading(false);
      },
    );
  };

  const submitRegister = () => {
    setLoading(true);
    if (email === null || password === null || repeatPassword === null) {
      FmMissingField();
      setLoading(false);
      return;
    }
    if (!checkEmail(email)) {
      FmInvalidEmail();
      setLoading(false);
      return;
    }
    if (!checkPassword(password)) {
      FmNotStrongEnoughPass();
      setLoading(false);
      return;
    }
    if (password !== repeatPassword) {
      FmNotMatchingPass();
      setLoading(false);
      return;
    }
    createUser(
      {email, password, isRecruiter: isCheckedSwitch},
      () => {
        FmCreatedAccount();
        setPassword(null);
        setEmail(null);
        setRepeatPassword(null);
        setLogging(true);
        setLoading(false);
        setPassword(null);
      },
      () => {
        FmErrorWhileFetch();
        setLoading(false);
      },
    );
  };

  return (
    <>
      <StatusBar hidden />
      <SafeAreaView>
        <LoginForm
          type={isLogging ? 'login' : 'register'}
          spinnerEnable
          spinnerVisibility={isLoading}
          usernamePlaceholder="E-mail"
          usernameUpdateInput={val => setEmail(val)}
          usernameInputValue={email}
          passwordPlaceholder="Mot de passe"
          passwordUpdateInput={val => setPassword(val)}
          passwordInputValue={password}
          repeatPasswordPlaceholder="Confirmez votre mot de passe"
          repeatPasswordUpdateInput={val => setRepeatPassword(val)}
          repeatPasswordInputValue={repeatPassword}
          onPressLogin={() => submitLogin()}
          onPressRegister={() => submitRegister()}
          onSignupClick={() => setLogging(!isLogging)}
          switchValue={isCheckedSwitch}
          onSwitchValueChange={switchValue => setCheckedSwitch(switchValue)}
        />
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
