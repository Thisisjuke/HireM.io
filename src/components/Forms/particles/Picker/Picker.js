import React from 'react';
import {StyledPicker, StyledView} from './styles';

export const Picker = props => {
  return (
    <StyledView>
      <StyledPicker
        {...props}
        style={{
          fontFamily: 'Poppins-Regular',
          height: 24,
          paddingLeft: 40,
          color: '#92929d',
        }}
      />
    </StyledView>
  );
};
