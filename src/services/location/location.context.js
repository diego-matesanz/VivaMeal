import React, { useState, useEffect } from 'react';

import { locationRequest, locationTransform } from './location.service';

export const LocationContext = React.createContext();

export const LocationContextProvider = ({ children }) => {
    const [location, setLocation] = useState(null);
    const [keyword, setKeyword] = useState('Madrid');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const onSearch = (searchKeyword) => {
        setIsLoading(true);
        setKeyword(searchKeyword);
    };

    useEffect(() => {
        if (!keyword.length) {
            return;
        }
        locationRequest(keyword.toLowerCase())
            .then(locationTransform)
            .then(result => {
                setLocation(result);
                setIsLoading(false);
            })
            .catch((error) => {
                setIsLoading(false);
                setError(error);
                console.log(error)
            })
    }, [keyword])

    return (
        <LocationContext.Provider
            value={{
                isLoading,
                error,
                location,
                search: onSearch,
                keyword,
            }}
        >
            {children}
        </LocationContext.Provider>
    );
}