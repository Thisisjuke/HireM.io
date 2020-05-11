import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';

import LoginComponent from "react-native-login-screen";
import LogoComponent from "../components/Logo";

const LoginScreen = () => {
  const [isCheckedSwitch, setCheckedSwitch] = useState(false);
  const [isLoading, setLoading] = useState(false);

  return <>
    <StatusBar hidden />
      <SafeAreaView>
        <LoginComponent
          spinnerEnable
          spinnerVisibility={isLoading}
          source={{ uri: "https://images.pexels.com/photos/2113554/pexels-photo-2113554.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" }}
          switchValue={isCheckedSwitch}
          onPressLogin={() => alert("Login Button is pressed")}
          onPressSettings={() => alert("Settings Button is pressed")}
          onSwitchValueChange={switchValue => setCheckedSwitch(switchValue)}
          usernameOnChangeText={username => alert("Username: ", username)}
          passwordOnChangeText={password => alert("Password: ", password)}
          loginButtonBackgroundColor="#003348"
          logoComponent={LogoComponent()}
        />
      </SafeAreaView>
  </>
}

export default LoginScreen
