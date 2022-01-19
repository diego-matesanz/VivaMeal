const { mocks, addMockImages } = require('./mock');
const url = require('url');
const functions = require('firebase-functions');

const addGoogleImage = (restaurant) => {
    const ref = restaurant.photos[0].photo_reference;
    if (!ref) {
        restaurant.photos = [
            "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg"
        ];
        return restaurant;
    }
    restaurant.photos = [
        `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${
          functions.config().google.key
        }`,
      ];
    return restaurant
};

module.exports.placesRequest = (request, response, client) => {
    const { location, mock } = url.parse(request.url, true).query;
    
    if (mock === 'true'){
        const data = mocks[location];
        if (data) {
            data.results = data.results.map(addMockImages);
        }
        return response.json(data);
    }

    client
        .placesNearby({
            params: {
                location: location,
                radius: 1500,
                type: 'restaurant',
                key: functions.config().google.key,
            },
            timeout: 1000,
        })
        .then(res => {
            res.data.results = res.data.results.map(addMockImages);
            return response.json(res.data);
        })
        .catch((error) => {
            response.status(400);
            return response.send(error.response.data.error_message);
        });
}