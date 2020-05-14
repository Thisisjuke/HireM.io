import styled from 'styled-components';
import {View} from 'react-native';
import {Text} from 'react-native-paper';

export const StyledContainer = styled(View)`
  position: absolute;
  top: 180px;
  background-color: white;
  border-radius: 12px;
  width: 90%;
  align-self: center;
`;

export const StyledTitle = styled(Text)`
  text-align: center;
  margin-top: 16px;
  margin-bottom: 8px;
  font-size: 16px;
  color: #171725;
  font-weight: 500;
`;

export const StyledContainerContent = styled(View)`
  margin: 12px;
  flex-direction: column;
`;

export const StyledFooterContainer = styled(View)`
  flex: 1;
  flex-direction: row;
  margin: 16px;
  align-items: center;
`;

export const StyledRmeContainer = styled(View)`
  margin-left: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledSwitchText = styled(Text)`
  color: #0062ff;
  margin-right: 8px;
  font-size: 12px;
  text-align: center;
`;
