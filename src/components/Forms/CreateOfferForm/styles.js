import styled from 'styled-components';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import {Picker} from '@react-native-community/picker';

export const StyledView = styled(View)`
  margin: 8px 0px;
`;

export const StyledButton = styled(Button)`
  margin-top: 16px;
`;

export const StyledPicker = styled(Picker)`
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const StyledPickerView = styled(View)`
  background-color: #fafafb;
  margin-top: 12px;
  margin-bottom: 28px;
  border-radius: 8px;
  overflow: hidden;
  padding-left: 8px;
`;
