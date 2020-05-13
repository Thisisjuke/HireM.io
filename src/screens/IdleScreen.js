import React from 'react';
import { View } from "react-native";
import Spinner from 'react-native-spinkit';

import Logo from "../components/LoginComponent/particles/Logo/Logo";

function IdleScreen() {
  return (
    <>
      <View style={{position: 'absolute', top: 50, left: 0, right: 0, zIndex: 1}}>
        <Logo logoText="HireM.io" />
      </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "#006699" }}>
        <Spinner
          type="ThreeBounce"
          color="white"
          size={50}
        />
      </View>
    </>
  );
}

export default IdleScreen;
