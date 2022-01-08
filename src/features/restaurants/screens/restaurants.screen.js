import React, { useContext } from 'react';
import { ImageBackground, TouchableOpacity } from 'react-native';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { RestaurantList, LoadingContainer, Loading } from './restaurants.screen.styles';
import { SafeArea } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/restaurants/restaurant.context';
import { Search } from '../components/search.component';

export const RestaurantsScreen = ({ navigation }) => {
    const { restaurants, isLoading, error } = useContext(RestaurantsContext);
    return (
        <ImageBackground source={require('../../../../assets/bg-main.png')} resizeMode="cover" style={{flex: 1}}>
            <SafeArea>
                {isLoading && (
                    <LoadingContainer>
                        <Loading size={50} animating={true} color={'purple'} />
                    </LoadingContainer>
                )}
                <Search />
                <RestaurantList 
                    data={restaurants}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity onPress={() => navigation.navigate('RestaurantDetail', {restaurant: item})}>
                                <RestaurantInfoCard restaurant={item} />
                            </TouchableOpacity>
                        );
                    }}
                    keyExtractor={(item) => item.name}
                />
            </SafeArea>
        </ImageBackground>
    
    )
};