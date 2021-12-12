import React from 'react';
import styled from 'styled-components/native';
import { StatusBar, ImageBackground } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';

const SafeArea = styled.SafeAreaView`
    flex: 1;
    marginTop: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
    padding: ${(props) => props.theme.space[3]};
`;

const RestaurantsListContainer = styled.View`
    flex: 1;
    padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsScreen = () => (
    
    <ImageBackground source={require('../../../../assets/bg-main.png')} resizeMode="cover" style={{flex: 1}}>
        <SafeArea>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
            <RestaurantsListContainer>
            <RestaurantInfoCard/>
            </RestaurantsListContainer>
        </SafeArea>
    </ImageBackground>
    
);