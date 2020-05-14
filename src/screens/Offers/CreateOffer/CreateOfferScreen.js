import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {StyledView} from './styles';
import {Headline} from 'react-native-paper';

export const SingleOfferScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <StyledView>
          <Headline>CreateOfferSingle</Headline>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleOfferScreen;
