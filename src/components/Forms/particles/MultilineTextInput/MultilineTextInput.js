import React from 'react';
import {StyledMultilineInput} from './styles';

export const MultilineTextInput = props => {
  return (
    <StyledMultilineInput
      placeholderTextColor="#92929d"
      {...props}
      multiline={true}
      numberOfLines={4}
      style={{textAlignVertical: 'top', fontFamily: 'Poppins-Regular'}}
    />
  );
};
