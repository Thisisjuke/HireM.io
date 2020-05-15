import styled from 'styled-components';
import {TouchableOpacity, View} from 'react-native';
import {Button, Headline} from 'react-native-paper';

export const StyledView = styled(View)`
  margin: 16px;
`;

export const StyledTouchable = styled(TouchableOpacity)`
  z-index: 1;
  align-items: center;
  margin: 16px 0;
`;

export const StyledLoggingButton = styled(Button)`
  background-color: white;
`;

export const StyledHeadline = styled(Headline)`
  margin-bottom: 40px;
  margin-top: 16px;
  text-align: center;
`;
