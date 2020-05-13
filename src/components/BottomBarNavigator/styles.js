import styled from 'styled-components';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export const StyledTab = styled(Tab)`
  background-color: red !important;
`;
