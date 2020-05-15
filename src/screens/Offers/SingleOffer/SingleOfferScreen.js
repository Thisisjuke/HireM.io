import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import dayjs from "dayjs";
import {useNavigation} from '@react-navigation/native';
import {Headline, Caption, Paragraph, Button, Text} from 'react-native-paper';

import {
  StyledView,
  StyledSubheading,
  StyledCard,
  StyledInvertedButton,
} from './styles';
import {useContext, useEffect, useState} from "react";
import {getOfferById} from "../../../api/Offer";
import {UserContext} from "../../../contexts/UserContext";

export const SingleOfferScreen = ({route}) => {
  const { offerId } = route.params;
  console.log(offerId)
  const navigation = useNavigation();

  const [userInfo, setUserInfo] = useContext(UserContext);
  const [offer, setOffer] = useState({});

  useEffect(() => {
    getOfferById(
      offerId,
      info => {
        setOffer(info)
      }
    )
  }, [])

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledView>
          <Headline>{offer.name}</Headline>
          <Caption>Type of contract : {offer.contractType ? offer.contractType.name : null}</Caption>
          <StyledCard>
            <StyledCard.Content>
              <StyledSubheading>{offer.companyDescription}</StyledSubheading>
              <StyledSubheading>{offer.offerDescription}</StyledSubheading>
              <Paragraph>Starts : {dayjs(offer.startDate).format('YYYY-MM-DD')}</Paragraph>
            </StyledCard.Content>
          </StyledCard>
        </StyledView>

        {userInfo.isRecruiter === true && (
          <StyledView>
            <Button uppercase={false} mode="contained">
              Inviter un candidat
            </Button>
            <StyledInvertedButton
              uppercase={false}
              onPress={() => navigation.navigate('OffersScreen')}
              mode="contained">
              <Text style={{color: '#0062ff'}}>Voir candidatures</Text>
            </StyledInvertedButton>
          </StyledView>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleOfferScreen;
