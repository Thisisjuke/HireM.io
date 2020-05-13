import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from "react-native-dynamic-vector-icons";

import LoginForm from "../components/LoginComponent/LoginForm";
import { setUserToken } from '../services/Auth'
import { UserContext } from "../contexts/UserContext";
import {
  FmCreatedAccount,
  FmMissingField,
  FmNotMatchingPass,
  FmNotStrongEnoughPass,
  FmInvalidEmail,
  FmErrorWhileFetch,
  FmInvalidUserCredential
} from "../services/FlashMessages";
import { checkPassword, checkEmail } from "../services/RegexChecker";
import { createUser, logUser } from "../api/User";

const LoginScreen = () => {
  const [authenticated, setAuthenticated] = useContext(UserContext);

  const [isLoading, setLoading] = useState(false);
  const [isLogging, setLogging] = useState(true);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [isCheckedSwitch, setCheckedSwitch] = useState(false);

  const submitLogin = () => {
    setLoading(true)
    if(email === null || password === null){
      FmMissingField()
      setLoading(false)
      return
    }
    if(!checkEmail(email)){
      FmInvalidEmail()
      setLoading(false)
      return
    }
    logUser(
      { email, password },
      res => {
        setLoading(false)
        setUserToken(res.token)
        setAuthenticated(res)
      },
      () => {
        FmInvalidUserCredential()
        setPassword(null)
        setLoading(false)
      }
    )
  }

  const submitRegister = () => {
    setLoading(true)
    if(email === null || password === null || repeatPassword === null){
      FmMissingField()
      setLoading(false)
      return
    }
    if(!checkEmail(email)){
      FmInvalidEmail()
      setLoading(false)
      return
    }
    if (!checkPassword(password)) {
      FmNotStrongEnoughPass()
      setLoading(false)
      return
    }
    if(password !== repeatPassword) {
      FmNotMatchingPass()
      setLoading(false)
      return
    }
    createUser(
      { email, password, recruiter: isCheckedSwitch },
      () => {
        FmCreatedAccount()
        setPassword(null)
        setEmail(null)
        setRepeatPassword(null)
        setLogging(true)
        setLoading(false)
        setPassword(null)
      },
      () => {
        FmErrorWhileFetch()
        setLoading(false)
      }
    )
  }

  return <>
    <StatusBar hidden />
      <SafeAreaView>
        <LoginForm
          type={isLogging ? "login" : "register"}

          spinnerEnable
          spinnerVisibility={isLoading}
          source={{ uri: "https://images.pexels.com/photos/2113554/pexels-photo-2113554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }}
          loginButtonBackgroundColor="#003348"

          usernameIconComponent={userIcon}
          usernameTitle="Your E-mail"
          usernamePlaceholder="E-mail"
          usernameUpdateInput={val => setEmail(val)}
          usernameInputValue={email}

          passwordIconComponent={passwordIcon}
          passwordTitle="Your Password"
          passwordPlaceholder="Password"
          passwordUpdateInput={val => setPassword(val)}
          passwordInputValue={password}

          repeatPasswordTitle="Repeat your Password"
          repeatPasswordPlaceholder="Password"
          repeatPasswordIconComponent={repeatPasswordIcon}
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
}

const userIcon = <Icon
  size={30}
  name="user"
  color="black"
  type="AntDesign"
/>

const passwordIcon = <Icon
  size={30}
  name="lock"
  color="black"
  type="AntDesign"
/>

const repeatPasswordIcon = <Icon
  size={30}
  name="lock"
  color="black"
  type="AntDesign"
/>


export default LoginScreen
