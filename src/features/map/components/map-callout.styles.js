import styled from "styled-components";
import { Card } from 'react-native-paper';

export const CalloutText = styled.Text`

`;

export const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    opacity: 0.95;
    margin-bottom: ${(props) => props.theme.space[3]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
    margin: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;