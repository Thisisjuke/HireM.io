import React, {useEffect, useContext} from 'react';
import { Button, Text, View } from "react-native";
import { AuthContext } from "../contexts/AuthContext";
import { UserContext } from "../contexts/UserContext";
import { getUserInfo } from "../api/User";

const HomeScreen = ({navigation}) => {
  const [authenticated, setAuthenticated] = useContext(AuthContext);
  const [userInfo, setUserInfo] = useContext(UserContext);

  useEffect(() => {
    getUserInfo(
      info => {
        setUserInfo(info)
        console.log("mes infos", info)
      },
      () => {
        setAuthenticated(false)
      }
    )
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{JSON.stringify(userInfo)}</Text>
      <Button
        onPress={navigation.navigate('Invite')}
        title="To invite page"
      />
    </View>
  );
}

export default HomeScreen;
