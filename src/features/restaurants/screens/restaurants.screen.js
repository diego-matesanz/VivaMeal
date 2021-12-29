import React from 'react';
import { ImageBackground } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SearchContainer, RestaurantList } from './restaurants.screen.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';

export const RestaurantsScreen = () => (
    
    <ImageBackground source={require('../../../../assets/bg-main.png')} resizeMode="cover" style={{flex: 1}}>
        <SafeArea>
            <SearchContainer>
                <Searchbar/>
            </SearchContainer>
            <RestaurantList 
                data={[
                    {name: 1}, 
                    {name: 2},
                    {name: 3}, 
                    {name: 4},
                    {name: 5}, 
                    {name: 6},
                    {name: 7}, 
                    {name: 8},
                    {name: 9}, 
                    {name: 10},
                    {name: 11}, 
                    {name: 12},
                    {name: 13}, 
                    {name: 14},
                ]}
                renderItem={() => <RestaurantInfoCard/>}
                keyExtractor={(item) => item.name}
            />
        </SafeArea>
    </ImageBackground>
    
);