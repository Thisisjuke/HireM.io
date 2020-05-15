import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {StyledView, StyledLoggingButton, StyledTouchable} from './styles';
import {Text, View} from 'react-native';
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
        <StyledTouchable onPress={() => {
        getMyOffers(
          userInfo.id,
          info => {
            setOfferList(info)
          }
        )
      }}>
        <StyledLoggingButton mode="contained">
          <Text style={{color: '#0062ff'}}>Reload</Text>
        </StyledLoggingButton>
      </StyledTouchable>
      <View>
        {offerList.map((info, i) => {
          return (<OfferCard key={i} id={info.id} seeMore={seeMore} title={info.name}/>)
        })}
      </View>
    </StyledView>
  );
};

export default ListOfferScreen;
