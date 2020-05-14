import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {StyledView, StyledHeadline} from './styles';
import {CreateOfferForm} from '../../../components/Forms/CreateOfferForm/CreateOfferForm';
import {createOffer} from '../../../api/Offer';

import {
  FmCreatedOffer,
  FmErrorCreatingOffer,
} from '../../../services/FlashMessages';

const CreateOfferScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StyledView>
          <StyledHeadline>Créez votre offre dès maintenant !</StyledHeadline>
          <CreateOfferForm onFormSubmit={createOfferFormSubmit} />
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

const createOfferFormSubmit = values => {
  createOffer(
    values,
    res => {
      console.log(res);
      FmCreatedOffer();
    },
    () => {
      FmErrorCreatingOffer();
    },
  );
};

export default CreateOfferScreen;
