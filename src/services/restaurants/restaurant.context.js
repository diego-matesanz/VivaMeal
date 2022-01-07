import React, { useState, createContext, useEffect, useMemo, useContext } from 'react';
import { LocationContext } from '../location/location.context';

import { restaurantsRequest, restaurantsTransform } from './restaurants.service';

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    const [restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const { location } = useContext(LocationContext);

    const retrieveRestaurants = (loc) => {
        setIsLoading(true);
        setRestaurants([]);
        setTimeout(() => {
            restaurantsRequest(loc)
                .then(restaurantsTransform)
                .then((restaurants) => {
                    setIsLoading(false);
                    setRestaurants(restaurants);
                })
                .catch((err) => {
                    setIsLoading(false);
                    setError(err);
                });
        }, 1000)
    }

    useEffect(() => {
        if (location) {
            const locationString = `${location.lat},${location.lng}`;
            console.log(locationString);
            retrieveRestaurants(locationString);
        }
    }, [location])

    return (
        <RestaurantsContext.Provider
            value={{
                restaurants,
                isLoading,
                error,
            }}
        >
            {children}
        </RestaurantsContext.Provider>
    )
}