import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {Headline} from 'react-native-paper';
import {StyledView} from './styles';
import {CreateOfferForm} from '../../../components/Forms/CreateOfferForm';
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
          <Headline>CreateOfferSingle</Headline>
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
