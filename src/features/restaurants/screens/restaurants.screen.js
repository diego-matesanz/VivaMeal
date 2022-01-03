import React, { useContext } from 'react';
import { ImageBackground } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SearchContainer, RestaurantList } from './restaurants.screen.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context';

export const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <ImageBackground source={require('../../../../assets/bg-main.png')} resizeMode="cover" style={{flex: 1}}>
            <SafeArea>
                <SearchContainer>
                    <Searchbar/>
                </SearchContainer>
                <RestaurantList 
                    data={restaurants}
                    renderItem={({ item }) => {
                        console.log(item);
                        return (
                            <RestaurantInfoCard restaurant={item} />
                        );
                    }}
                    keyExtractor={(item) => item.name}
                />
            </SafeArea>
        </ImageBackground>
    
    )
};