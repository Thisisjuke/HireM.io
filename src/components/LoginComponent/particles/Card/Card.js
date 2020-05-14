import React from 'react';
import PropTypes from 'prop-types';
import TextInput from 'react-native-improved-text-input';

import {
  StyledContainer,
  StyledContainerContent,
  StyledTextContainer,
  _textStyle,
  _textInputStyle,
} from './styles';

const Card = props => {
  const {
    value,
    textStyle,
    textColor,
    placeholder,
    onChangeText,
    selectionColor,
  } = props;
  return (
    <StyledContainer>
      <StyledContainerContent>
        <StyledTextContainer>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="#ccc"
            selectionColor={selectionColor}
            onChangeText={v => onChangeText(v)}
            style={textStyle || _textInputStyle(textColor)}
            value={value}
            defaultValue={value}
            {...props}
          />
        </StyledTextContainer>
      </StyledContainerContent>
    </StyledContainer>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  textColor: PropTypes.string,
  titleColor: PropTypes.string,
  placeholder: PropTypes.string,
  selectionColor: PropTypes.string,
};

Card.defaultProps = {
  title: 'User Name',
  textColor: 'black',
  titleColor: '#c7c5c6',
  placeholder: 'John Doe',
  selectionColor: '#757575',
};

export default Card;
