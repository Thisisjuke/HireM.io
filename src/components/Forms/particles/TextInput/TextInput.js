import React from 'react';
import {StyledInput} from './styles';

export const TextInput = props => {
  return (
    <StyledInput
      {...props}
      style={{fontFamily: 'Poppins-Regular'}}
      placeholderTextColor="#92929d"
    />
  );
};
