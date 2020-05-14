import React from 'react';
import {StyledContainer, StyledText, StyledBrandingIcon} from './styles';

const Logo = props => {
  const {logoText} = props;
  return (
    <StyledContainer>
      <StyledText>{logoText}</StyledText>
      <StyledBrandingIcon
        size={32}
        name="account-circle-outline"
        color="white"
        type="MaterialCommunityIcons"
      />
    </StyledContainer>
  );
};

export default Logo;
