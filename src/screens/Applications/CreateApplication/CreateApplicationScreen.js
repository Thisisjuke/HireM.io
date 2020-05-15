import React from 'react';
import {createOffer} from '../../../api/Offer';
import {SafeAreaView, ScrollView} from 'react-native';
import {StyledView, StyledHeadline} from './styles';
import {
  FmCreatedApplication,
  FmErrorCreatingApplication,
} from '../../../services/FlashMessages';
import {CreateApplicationForm} from '../../../components/Forms/CreateApplicationForm/CreateApplicationForm';
import dayjs from 'dayjs';

const CreateApplicationScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StyledView>
          <StyledHeadline>Faîtes votre candidature :</StyledHeadline>
          <CreateApplicationForm onFormSubmit={createApplicationFormSubmit} />
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

const createApplicationFormSubmit = values => {
  values['age'] =
    parseInt(dayjs(new Date()).format('YYYY')) -
    parseInt(dayjs(values.age).format('YYYY'));
  createOffer(
    values,
    res => {
      console.log(res);
      FmCreatedApplication();
    },
    () => {
      FmErrorCreatingApplication();
    },
  );
};

export default CreateApplicationScreen;
