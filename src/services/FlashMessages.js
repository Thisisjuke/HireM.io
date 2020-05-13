import { showMessage } from "react-native-flash-message";

export const FmCreatedAccount = () => showMessage({
  message: "Your account has been created !",
  description: "Please log in.",
  type: "success",
});

export const FmNotMatchingPass = () => showMessage({
  message: "Not matching Passwords.",
  description: "Your 2 passwords are not matching, please verify.",
  type: "danger",
});

export const FmNotStrongEnoughPass = () => showMessage({
  message: "Invalid Password.",
  description: "Your Password should contain at least 8 characters, 1 digit and 1 capital letter.",
  type: "danger",
});

export const FmMissingField = () => showMessage({
  message: "At least one input is empty.",
  description: "Please fill all the inputs of the register form.",
  type: "danger",
});

export const FmInvalidEmail = () => showMessage({
  message: "Your email is invalid.",
  description: "Please provide a valid email.",
  type: "danger",
});

export const FmErrorWhileFetch = () => showMessage({
  message: "Oops... Something wrong happened.",
  description: "Please retry or verify that your phone is connected to internet.",
  type: "danger",
});

