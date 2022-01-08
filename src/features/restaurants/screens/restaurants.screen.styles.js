import { ActivityIndicator } from 'react-native-paper';
import styled from "styled-components";

export const RestaurantList = styled.FlatList.attrs({
    contentContainerStyle: {
      padding: 16,
    },
  })``;

export const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
`;

export const Loading = styled(ActivityIndicator)`
  margin-left: -25px;
`;