import React, {useContext, useEffect} from 'react';
import RecruiterBottomBarNavigation from "./RecruiterBottomBarNavigator";
import IdleScreen from "../../screens/IdleScreen";
import {AuthContext} from "../../contexts/AuthContext";
import {UserContext} from "../../contexts/UserContext";
import {getUserInfo} from "../../api/User";
import UserBottomBarNavigator from "./UserBottomBarNavigator";

export const BottomBarNavigator = () => {
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

  return(
    <>
      {userInfo === null ? (
        <IdleScreen />
      ) : userInfo.isRecruiter ? (
        <RecruiterBottomBarNavigation />
      ) : (
        <UserBottomBarNavigator />
      )}
    </>
  )
};

export default BottomBarNavigator;
