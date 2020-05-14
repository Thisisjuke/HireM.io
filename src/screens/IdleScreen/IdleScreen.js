import React from 'react';
import Spinner from 'react-native-spinkit';

import {StyledLogoView, StyledSpinnerView} from './styles';
import Logo from '../../components/LoginComponent/particles/Logo/Logo';

function IdleScreen() {
  return (
    <>
      <StyledLogoView>
        <Logo logoText="HireM.io" />
      </StyledLogoView>
      <StyledSpinnerView>
        <Spinner type="Circle" color="white" size={50} />
      </StyledSpinnerView>
    </>
  );
}

export default IdleScreen;
