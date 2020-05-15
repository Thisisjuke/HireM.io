import React from 'react';
import { Text, View } from "react-native";
import {createOffer} from "../../../api/Offer";
import {FmCreatedApplication, FmErrorCreatingApplication} from "../../../services/FlashMessages";
import {CreateApplicationForm} from "../../../components/Forms/CreateApplicationForm";
import dayjs from "dayjs";

const CreateApplicationScreen = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Apply</Text>
      <CreateApplicationForm
        onFormSubmit={createApplicationFormSubmit}
      />
    </View>
  );
}

const createApplicationFormSubmit = values => {
  values['age'] = parseInt(dayjs(new Date).format('YYYY')) - parseInt(dayjs(values.age).format('YYYY'))
  createOffer(
    values,
    res => {
      console.log(res)
      FmCreatedApplication()
    },
    () => {
      FmErrorCreatingApplication()
    }
  )
}

export default CreateApplicationScreen;
