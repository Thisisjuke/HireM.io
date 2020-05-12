import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from "react-native-dynamic-vector-icons";

import LoginForm from "../components/LoginComponent/LoginForm";

const LoginScreen = ({navigation}) => {
  const [isCheckedSwitch, setCheckedSwitch] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isLogging, setLogging] = useState(true);


  const submitLogin = () => {
    setLoading(true)
    alert("Login Button is pressed")
    setTimeout( () => {
      setLoading(false)
    }, 2000)
  }

  const submitRegister = () => {
    setLoading(true)
    alert("Register Button is pressed")
    setTimeout( () => {
      setLoading(false)
    }, 2000)
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
          passwordIconComponent={passwordIcon}
          passwordTitle="Your Password"
          passwordPlaceholder="Password"
          repeatPasswordTitle="Repeat your Password"
          repeatPasswordPlaceholder="Password"
          repeatPasswordIconComponent={repeatPasswordIcon}

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
