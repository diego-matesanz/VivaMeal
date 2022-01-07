import React, { useContext } from 'react';
import { ImageBackground, View } from 'react-native';
import { Searchbar, Colors } from 'react-native-paper';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { SearchContainer, RestaurantList, LoadingContainer, Loading } from './restaurants.screen.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context';
import { Search } from '../components/search.component';

export const RestaurantsScreen = () => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <ImageBackground source={require('../../../../assets/bg-main.png')} resizeMode="cover" style={{flex: 1}}>
            <SafeArea>
                {isLoading && (
                    <LoadingContainer>
                        <Loading size={50} animating={true} color={Colors.purple300} />
                    </LoadingContainer>
                )}
                <Search />
                <RestaurantList 
                    data={restaurants}
                    renderItem={({ item }) => {
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