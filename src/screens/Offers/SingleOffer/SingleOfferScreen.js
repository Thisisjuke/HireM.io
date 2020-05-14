import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {Headline, Caption, Paragraph, Button, Text} from 'react-native-paper';
import {
  StyledView,
  StyledSubheading,
  StyledCard,
  StyledInvertedButton,
} from './styles';

export const SingleOfferScreen = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledView>
          <Headline>Titre de l'offre</Headline>
          <Caption>Offre publiée par...</Caption>
          <StyledCard>
            <StyledCard.Content>
              <StyledSubheading>Post de l'offre...</StyledSubheading>
              <Paragraph>Détail 1 : </Paragraph>
              <Paragraph>Détail 2 : </Paragraph>
              <Paragraph>Détail 3 : </Paragraph>
              <Paragraph>Détail 4 : </Paragraph>
            </StyledCard.Content>
          </StyledCard>
        </StyledView>

        {/* only recruiter */}

        <StyledView>
          <Button uppercase={false} mode="contained">
            Inviter un candidat
          </Button>
          <StyledInvertedButton
            uppercase={false}
            onPress={() => navigation.navigate('OffersScreen')}
            mode="contained">
            <Text style={{color: '#0062ff'}}>Voir les candidatures</Text>
          </StyledInvertedButton>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleOfferScreen;
