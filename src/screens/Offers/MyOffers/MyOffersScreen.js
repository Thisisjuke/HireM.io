import * as React from 'react';
import {List, Button} from 'react-native-paper';
import {StyledView, StyledCard} from './styles';

class MyOffersScreen extends React.Component {
  state = {
    expanded: true,
  };

  _handlePress = () =>
    this.setState({
      expanded: !this.state.expanded,
    });

  render() {
    return (
      <StyledView>
        <List.Section title="Toutes mes offres">
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
    );
  }
}

export default MyOffersScreen;
