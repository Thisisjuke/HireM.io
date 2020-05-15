import React from 'react'
import {Button} from 'react-native-paper';
import {StyledCard, StyledFooter, StyledTitle} from "./styles";

export const OfferCard = props => {
  const {
    id,
    title,
    seeMore
  } = props
  return (
    <StyledCard>
      <StyledCard.Content>
        <StyledTitle>{title}</StyledTitle>
      </StyledCard.Content>
      <StyledFooter>
        <Button
          uppercase={false}
          onPress={() => seeMore(id)}
          mode="contained">
            See More
        </Button>
      </StyledFooter>
    </StyledCard>
  )
}
