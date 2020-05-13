import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';

import {List} from 'react-native-paper';
import {StyledView, StyledCard} from './styles';

export const SingleOfferScreen = () => {
  state = {
    expanded: true,
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledView>
          <List.Section title="Toutes mes offres">
            <StyledCard>
              <List.Accordion title="Offres statut 2">
                <List.Item title="First item" />
                <List.Item title="Second item" />
              </List.Accordion>
            </StyledCard>
            <StyledCard>
              <List.Accordion title="Offres statut 3">
                <List.Item title="First item" />
                <List.Item title="Second item" />
              </List.Accordion>
            </StyledCard>
          </List.Section>
        </StyledView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SingleOfferScreen;
