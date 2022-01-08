import React from "react";
import { Platform } from "react-native";

import { Text } from "../typography/text.component";
import { CompactImage, Item, CompactWebView } from "./compact-restaurant-info.styles";

const isAndroid = Platform.OS === 'android';

export const CompactRestaurantInfo = ({ restaurant }) => {
    const Image = isAndroid ? CompactWebView : CompactImage;

    return (
        <Item>
            <Image source={{ uri: restaurant.photos[0] }} />
            <Text center variant="captionRegular" numberOfLines={3}>
                {restaurant.name}
            </Text>
        </Item>
    );
};