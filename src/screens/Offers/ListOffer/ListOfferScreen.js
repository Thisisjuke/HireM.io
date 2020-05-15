import React, {useContext, useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View} from 'react-native';

import {Text, Button} from 'react-native-paper';

import {OfferCard} from '../../../components/Offer/OfferCard';
import {getMyOffers} from '../../../api/Offer';
import {UserContext} from '../../../contexts/UserContext';

import {
  StyledView,
  StyledLoggingButton,
  StyledTouchable,
  StyledHeadline,
} from './styles';

const ListOfferScreen = () => {
  const navigation = useNavigation();
  const [offerList, setOfferList] = useState([]);
  const [userInfo, setUserInfo] = useContext(UserContext);

  useEffect(() => {
    getMyOffers(userInfo.id, info => {
      setOfferList(info);
    });
  }, []);

  const seeMore = id => navigation.navigate('SingleOfferScreen', {offerId: id});

  const EmptyOffers = () => {
    return (
      <>
        <StyledHeadline>
          Vous n'avez pas encore créé d'offres, lancez-vous !
        </StyledHeadline>
        <Button
          mode="contained"
          onPress={() => navigation.navigate('CreateOffer')}>
          J'y vais !
        </Button>
        <StyledTouchable
          onPress={() => {
            getMyOffers(userInfo.id, info => {
              setOfferList(info);
            });
          }}>
          <StyledLoggingButton mode="contained">
            <Text style={{color: '#0062ff'}}>Actualiser</Text>
          </StyledLoggingButton>
        </StyledTouchable>
      </>
    );
  };

  const FullOffers = () => {
    return (
      <>
        <StyledTouchable
          onPress={() => {
            getMyOffers(userInfo.id, info => {
              setOfferList(info);
            });
          }}>
          <StyledLoggingButton mode="contained" style={{width: 200}}>
            <Text style={{color: '#0062ff'}}>Actualiser</Text>
          </StyledLoggingButton>
        </StyledTouchable>
        <View>
          {offerList.map((info, i) => {
            return (
              <OfferCard
                key={i}
                id={info.id}
                seeMore={seeMore}
                title={info.name}
              />
            );
          })}
        </View>
      </>
    );
  };

  return (
    <StyledView>
      {offerList.length != 0 ? <FullOffers /> : <EmptyOffers />}
    </StyledView>
  );
};

export default ListOfferScreen;
