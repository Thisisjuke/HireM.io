import * as React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {List, Button, IconButton} from 'react-native-paper';
import {StyledView, StyledCard} from './styles';

export const MyOffersScreen = () => {
  state = {
    expanded: true,
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });

  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <ScrollView>
        <StyledView>
          <List.Section title="Statut 1">
            <StyledCard>
              <List.Accordion title="Offres statut 1">
                <List.Item
                  title="First item"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                  right={() => (
                    <IconButton
                      icon="open-in-new"
                      color="#0062ff"
                      size={20}
                      onPress={() => navigation.navigate('SingleOfferScreen')}
                    />
                  )}
                />
                <List.Item
                  title="First item"
                  description="Lorem ipsum lorem ipsum lorem ipsum lorem ipsum"
                />
              </List.Accordion>
            </StyledCard>
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

          <List.Section title="Statut 2">
            <StyledCard>
              <List.Accordion title="Offres statut 1">
                <List.Item
                  title="First item"
                  right={props => (
                    <Button uppercase={false} mode="contained">
                      Voir
                    </Button>
                  )}
                />
                <List.Item
                  title="Second item"
                  right={props => (
                    <Button uppercase={false} mode="contained">
                      Voir
                    </Button>
                  )}
                />
              </List.Accordion>
            </StyledCard>
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

          <List.Section title="Statut 3">
            <StyledCard>
              <List.Accordion title="Offres statut 1">
                <List.Item
                  title="First item"
                  right={props => (
                    <Button uppercase={false} mode="contained">
                      Voir
                    </Button>
                  )}
                />
                <List.Item
                  title="Second item"
                  right={props => (
                    <Button uppercase={false} mode="contained">
                      Voir
                    </Button>
                  )}
                />
              </List.Accordion>
            </StyledCard>
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

export default MyOffersScreen;
