import React from 'react';
import styled from 'styled-components/native';
import { Card } from 'react-native-paper';

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const RestaurantCardCover = styled(Card.Cover)`
    margin: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
    padding-horizontal: ${(props) => props.theme.space[3]};
    padding-bottom: ${(props) => props.theme.space[3]};
`;

const Name = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body}
    color: ${(props) => props.theme.colors.ui.primary};
`;

const Address = styled.Text`
    font-family: ${(props) => props.theme.fonts.body};
    font-size: ${(props) => props.theme.fontSizes.caption}
    color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({restaurant = {}}) => {
    const {
        name = "Some restaurant",
        icon,
        photo = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily
    } = restaurant;
    return (
        <RestaurantCard>
            <RestaurantCardCover source={{ uri: photo[0] }}/>
            <Info>
                <Name>{name}</Name>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}