import React from 'react';
import {Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

import {StyledView, StyledCard, StyledTitle, StyledFooter} from './styles';

const ListOfferScreen = () => {
  const navigation = useNavigation();

  return (
    <StyledView>
      <StyledCard>
        <StyledCard.Content>
          <StyledTitle>Titre de l'offre</StyledTitle>
        </StyledCard.Content>
        <StyledFooter>
          <Button
            uppercase={false}
            onPress={() => navigation.navigate('SingleOfferScreen')}
            mode="contained">
            Voir le détail
          </Button>
        </StyledFooter>
      </StyledCard>

      <StyledCard>
        <StyledCard.Content>
          <StyledTitle>Titre de l'offre</StyledTitle>
        </StyledCard.Content>
      </StyledCard>

      <StyledCard>
        <StyledCard.Content>
          <StyledTitle>Titre de l'offre</StyledTitle>
        </StyledCard.Content>
      </StyledCard>
    </StyledView>
  );
};

export default ListOfferScreen;
