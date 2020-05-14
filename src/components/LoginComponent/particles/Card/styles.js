import styled from 'styled-components';
import {View} from 'react-native';
import {Text, Card} from 'react-native-paper';
import Icon from 'react-native-dynamic-vector-icons';

import {isAndroid} from '@freakycoder/react-native-helpers';

export const StyledContainer = styled(View)`
  width: 90%;
  color: #92929d;
  border-width: 1px;
  border-color: #f1f1f5;
  justify-content: center;
  margin: 16px;
  margin-top: 0px;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 8px;
  background-color: #fafafb;
`;

export const StyledContainerContent = styled(View)`
  margin-left: 24px;
  margin-right: 24px;
  flex-direction: row;
`;

export const StyledTextContainer = styled(View)`
  width: 90%;
  margin-left: 0px;
  margin-top: 4px;
  flex-direction: column;
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

export const _textInputStyle = textColor => {
  return {
    fontSize: 14,
    color: textColor,
    fontWeight: '800',
    right: isAndroid ? 5 : 0,
    marginTop: isAndroid ? 0 : 3,
    height: isAndroid ? 35 : null,
  };
};

export const _textStyle = titleColor => {
  return {
    fontSize: 12,
    fontWeight: '700',
    color: titleColor,
  };
};
