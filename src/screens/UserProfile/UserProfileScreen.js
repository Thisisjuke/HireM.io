import React, {useContext} from 'react';
import {Text} from 'react-native-paper';

import {AuthContext} from '../../contexts/AuthContext';
import {UserContext} from '../../contexts/UserContext';
import {signOut} from '../../services/Auth';
import {StyledView, StyledCard, StyledButton, StyledSubheading} from './styles';

function UserProfileScreen() {
  const [userInfo, setUserInfo] = useContext(UserContext);
  const [authenticated, setAuthenticated] = useContext(AuthContext);

  return (
    <StyledView>
      <StyledCard>
        <StyledCard.Content>
          <StyledSubheading> 
            Voici les informations liées à votre compte :
          </StyledSubheading>
          {Object.keys(userInfo).map((info, i) => {
            return (
              <Text key={i}>
                {info}: {String(userInfo[info])}
              </Text>
            );
          })}
        </StyledCard.Content>
      </StyledCard>
      <StyledButton
        mode="contained"
        onPress={() => {
          signOut();
          setAuthenticated(null);
        }}>
        <Text style={{color: 'white'}}>Se déconnecter</Text>
      </StyledButton>
    </StyledView>
  );
}

export default UserProfileScreen;
