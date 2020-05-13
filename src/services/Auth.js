import AsyncStorage from "@react-native-community/async-storage";

export const USER_KEY = "recruitmio-key";

export const setUserToken = token => AsyncStorage.setItem(USER_KEY, JSON.stringify(token));
export const getUserToken = async () => await AsyncStorage.getItem(USER_KEY).then(res => JSON.parse(res));

export const signOut = () => {
  AsyncStorage.removeItem(USER_KEY)
};

export const isSignedIn = () => {
  return AsyncStorage.getItem(USER_KEY)
      .then(res => {
        return res !== null;
      })
};
