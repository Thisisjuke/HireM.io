import AsyncStorage from "@react-native-community/async-storage";

export const USER_KEY = "recruitmio";

export const onSignIn = () => AsyncStorage.setItem(USER_KEY, JSON.stringify(true));

export const onSignOut = () => AsyncStorage.removeItem(USER_KEY);

export const isSignedIn = () => {
  return AsyncStorage.getItem(USER_KEY)
      .then(res => {
        return res !== null;
      })
};
