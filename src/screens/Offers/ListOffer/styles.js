import styled from 'styled-components';
import {TouchableOpacity, View} from 'react-native';
import {Button, Headline} from 'react-native-paper';

export const StyledView = styled(View)`
  margin: 16px;
`;

export const StyledTouchable = styled(TouchableOpacity)`
  left: 0;
  right: 0;
  z-index: 10;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const StyledLoggingButton = styled(Button)`
  background-color: white;
`;

export const StyledHeadline = styled(Headline)`
  margin-bottom: 40px;
  margin-top: 16px;
`;
