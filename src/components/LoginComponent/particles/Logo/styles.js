import styled from 'styled-components';
import {View} from 'react-native';
import {Text, Card} from 'react-native-paper';
import Icon from 'react-native-dynamic-vector-icons';

export const StyledContainer = styled(View)`
  top: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledText = styled(Text)`
  font-size: 24px;
  color: white;
`;

export const StyledBrandingIcon = styled(Icon)`
  margin-left: 12px;
  margin-bottom: 8px;
`;

export const StyledCard = styled(Card)`
  margin: 16px;
  padding: 8px;
  margin-bottom: 0px;
`;
