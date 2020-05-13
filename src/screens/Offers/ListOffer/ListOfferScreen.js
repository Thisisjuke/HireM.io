import React from 'react';
import {Button} from 'react-native-paper';

import {StyledView, StyledCard, StyledTitle, StyledFooter} from './styles';

const ListOfferScreen = () => {
  return (
    <StyledView>
      <StyledCard>
        <StyledCard.Content>
          <StyledTitle>Titre de l'offre</StyledTitle>
        </StyledCard.Content>
        <StyledFooter>
          <Button uppercase={false} mode="contained">
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
