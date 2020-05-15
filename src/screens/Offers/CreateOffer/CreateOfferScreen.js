import React, {useContext} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import { CreateOfferForm } from "../../../components/Forms/CreateOfferForm"
import {createOffer} from "../../../api/Offer";
import {StyledView, StyledHeadline} from './styles';
import {FmCreatedOffer, FmErrorCreatingOffer} from "../../../services/FlashMessages";
import {UserContext} from "../../../contexts/UserContext";

const CreateOfferScreen = () => {
  const [userInfo, setUserInfo] = useContext(UserContext);

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledView>
          <StyledHeadline>Créez votre offre dès maintenant !</StyledHeadline>
          <CreateOfferForm
            userId={userInfo.id}
            onFormSubmit={createOfferFormSubmit} />
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

const createOfferFormSubmit = (values, id) => {
  values["user_id"] = `/users/${id}`

  createOffer(
    values,
    res => {
      console.log(res)
      FmCreatedOffer()
    },
    () => {
      FmErrorCreatingOffer();
    },
  );
};

export default CreateOfferScreen;
