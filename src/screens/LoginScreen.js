import React, { useContext, useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import Icon from "react-native-dynamic-vector-icons";

import LoginForm from "../components/LoginComponent/LoginForm";
import { onSignIn, onSignOut } from '../services/Auth'
import { UserContext } from "../contexts/UserContext";

const LoginScreen = ({navigation}) => {
  const [authenticated, setAuthenticated] = useContext(UserContext);

  const [isLoading, setLoading] = useState(false);
  const [isLogging, setLogging] = useState(true);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [repeatPassword, setRepeatPassword] = useState(null);
  const [isCheckedSwitch, setCheckedSwitch] = useState(false);

  const submitLogin = () => {
    setLoading(true)
    alert(`${email}, ${password}, ${repeatPassword}`)
    setTimeout( () => {
      //onSignIn({jwt:"yoyo"})
      //setAuthenticated({jwt:"yoyo"})
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
          usernameUpdateInput={val => setEmail(val)}
          passwordIconComponent={passwordIcon}
          passwordTitle="Your Password"
          passwordPlaceholder="Password"
          passwordUpdateInput={val => setPassword(val)}
          repeatPasswordTitle="Repeat your Password"
          repeatPasswordPlaceholder="Password"
          repeatPasswordIconComponent={repeatPasswordIcon}
          repeatPasswordUpdateInput={val => setRepeatPassword(val)}

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
