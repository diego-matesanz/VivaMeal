import React from 'react';
import styled from 'styled-components/native';
import { Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';

const RestaurantCard = styled(Card)`
    background-color: ${(props) => props.theme.colors.bg.primary};
    opacity: 0.95;
`;

const RestaurantCardCover = styled(Card.Cover)`
    margin: ${(props) => props.theme.space[3]};
    background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Info = styled.View`
    padding-horizontal: ${(props) => props.theme.space[3]};
    padding-bottom: ${(props) => props.theme.space[3]};
`;

const Rating = styled.View`
    flex-direction: row;
    padding-vertical: ${(props) => props.theme.space[2]};
`;

const Section = styled.View`
    flex-direction: row;
    align-items: center;
`;

const SectionEnd = styled.View`
    flex: 1;
    flex-direction: row;
    justify-content: flex-end;
`;

const ClosedLable = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.caption};
    color: red;
`;

const Name = styled.Text`
    font-family: ${(props) => props.theme.fonts.heading};
    font-size: ${(props) => props.theme.fontSizes.body};
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
        icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
        photo = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
        ],
        address = "100 some random street",
        isOpenNow = true,
        rating = 4,
        isClosedTemporarily = false
    } = restaurant;

    const ratingArray = Array.from(new Array(Math.floor(rating)));

    return (
        <RestaurantCard>
            <RestaurantCardCover source={{ uri: photo[0] }}/>
            <Info>
                <Name>{name}</Name>
                <Section>
                    <Rating>
                        {ratingArray.map(() =>(
                            <SvgXml xml={star} width={20} height={20}/>
                        ))}
                    </Rating>
                    <SectionEnd>
                        {isClosedTemporarily && (
                            <ClosedLable>CLOSED TEMPORARILY</ClosedLable>
                        )}
                        {isOpenNow && <SvgXml xml={open} width={20} height={20}/>}
                        <Image style={{width: 20, height: 20, marginLeft: 16}} source={{uri: icon}}/>
                    </SectionEnd>
                </Section>
                <Address>{address}</Address>
            </Info>
        </RestaurantCard>
    );
}