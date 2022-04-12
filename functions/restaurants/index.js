const url = require("url");
const { mocks, setRestaurantImage } = require("./mocks");
const functions = require("firebase-functions");

module.exports.restaurantRequest = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  const restaurants = mocks[location];
  if (mock === "true") {
    restaurants.results = restaurants.results.map(setRestaurantImage);
    return response.json(restaurants);
  }
  client
    .placesNearby({
      params: {
        location: location,
        key: functions.config().google.key,
        radius: 1500,
        type: "restaurant",
      },
      timeout: 1000,
    })
    .then((res) => {
      res.data.results = res.data.results.map(setRestaurantImage);
      response.json(res.data);
    })
    .catch((error) => {
      console.log(error, "error");
      response.status(400);
      return response.send(error);
    });
};
