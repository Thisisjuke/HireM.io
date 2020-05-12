import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");

export const container = backgroundColor => {
  return {
    bottom: 100,
    backgroundColor,
    borderRadius: 24,
    width: width * 0.9,
    alignSelf: "center",
    position: "absolute"
  };
};

export default {
  title: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 4,
    fontSize: 14,
    color: "white",
    fontWeight: "700",
  },
  containerGlue: {
    marginTop: 12
  },
  footerContainer: {
    flex: 1,
    margin: 16,
    alignItems: "center",
    flexDirection: "row"
  },
  rememberMeContainer: {
    marginLeft: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  switchTextStyle: {
    color: "white",
    marginRight: 8,
    fontWeight: "700"
  }
};
