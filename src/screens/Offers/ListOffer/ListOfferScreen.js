import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyledView} from './styles';
import {OfferCard} from "../../../components/Offer/OfferCard";
import {getMyOffers} from "../../../api/Offer";
import {UserContext} from "../../../contexts/UserContext";

const ListOfferScreen = () => {
  const navigation = useNavigation();
  const [offerList, setOfferList] = useState([]);
  const [userInfo, setUserInfo] = useContext(UserContext);

  useEffect(() => {

    getMyOffers(
      userInfo.id,
      info => {
        setOfferList(info)
      }
    )
  }, [])

  const seeMore = id => navigation.navigate('SingleOfferScreen', {offerId: id})

  return (
    <StyledView>
      {offerList.map((info, i) => {
        return (<OfferCard key={i} id={info.id} seeMore={seeMore} title={info.name}/>)
      })}
    </StyledView>
  );
};

export default ListOfferScreen;
