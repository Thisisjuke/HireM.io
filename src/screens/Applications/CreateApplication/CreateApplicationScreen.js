import React from 'react';
import { Text, View } from "react-native";
import {createOffer} from "../../../api/Offer";
import {FmCreatedOffer, FmErrorCreatingOffer} from "../../../services/FlashMessages";
import {CreateApplicationForm} from "../../../components/Forms/CreateApplicationForm";

const CreateApplicationScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Add offer</Text>
      <CreateApplicationForm
        onFormSubmit={createApplicationFormSubmit}
      />
    </View>
  );
}

const createApplicationFormSubmit = values => {
  createOffer(
    values,
    res => {
      console.log(res)
      FmCreatedOffer()
    },
    () => {
      FmErrorCreatingOffer()
    }
  )
}

export default CreateApplicationScreen;
