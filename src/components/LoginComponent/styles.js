import styled from 'styled-components';
import {View, TouchableOpacity} from 'react-native';
import Spinner from 'react-native-spinkit';
import {Button} from 'react-native-paper';
import {ScreenWidth, ScreenHeight} from '@freakycoder/react-native-helpers';

export const container = loginButtonBackgroundColor => {
  return {
    marginBottom: 32,
    width: ScreenWidth,
    height: ScreenHeight,
    backgroundColor: loginButtonBackgroundColor,
  };
};

export const StyledContainer = styled(View)`
  margin-bottom: 32px;
`;

export const StyledLoginContainer = styled(View)`
  margin-top: 24px;
`;

export const StyledSpinner = styled(Spinner)`
  left: 0;
  right: 0;
  z-index: 10;
  height: 50px;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 160px;
`;

export const StyledTouchable = styled(TouchableOpacity)`
  left: 0;
  right: 0;
  z-index: 10;
  height: 50px;
  position: absolute;
  align-items: center;
  justify-content: center;
  bottom: 160px;
`;

export const StyledTouchableRegister = styled(StyledTouchable)`
  bottom: 80px;
`;

export const StyledLoggingButton = styled(Button)`
  background-color: white;
`;
