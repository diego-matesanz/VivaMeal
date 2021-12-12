import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

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
        <Card>
            <Card.Cover source={{ uri: photo[0] }} style={styles.photo}/>
            <Card.Content>
                <Title>{name}</Title>
                <Paragraph>{address}</Paragraph>
            </Card.Content>
        </Card>
    );
}

const styles = StyleSheet.create({
    photo: {
        margin: 16
    }
  });