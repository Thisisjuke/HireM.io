import React, {useEffect, useContext} from 'react';
import { Button, View } from "react-native";
import { UserContext } from "../contexts/UserContext";
import { getUserInfo } from "../api/User";

const HomeScreen = ({ navigation }) => {
  const [authenticated, setAuthenticated] = useContext(UserContext);

  useEffect(() => {
    getUserInfo(
      info => {
        console.log("mes infos", info)
      },
      () => {
        setAuthenticated(false)
      }
    )
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Iam the home"
      />
    </View>
  );
}

export default HomeScreen;
