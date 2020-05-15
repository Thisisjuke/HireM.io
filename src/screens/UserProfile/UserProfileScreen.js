import React, {useContext} from 'react';

import {AuthContext} from "../../contexts/AuthContext";
import {UserContext} from "../../contexts/UserContext";
import {Text} from "react-native-paper";
import {signOut} from "../../services/Auth";
import Button from "react-native-paper/src/components/Button";
import {View} from "react-native";

function UserProfileScreen() {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [authenticated, setAuthenticated] = useContext(AuthContext);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {Object.keys(userInfo).map((info, i) => {
        return (<Text key={i}>{info}: {String(userInfo[info])}</Text>)
      })}
      <Button color="red" onPress={() => {
        signOut()
        setAuthenticated(null)
      }}>
        <Text>Log Out</Text>
      </Button>
    </View>
  );
}

export default UserProfileScreen;
