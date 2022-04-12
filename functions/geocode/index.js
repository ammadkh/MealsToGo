const url = require("url");
const { locations } = require("./geocode.mock");
const functions = require("firebase-functions");
const suggestions = require("./suggestions.mock");
var axios = require("axios");

module.exports.geocodeRequest = (request, response, client) => {
  const { location, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    const locationInfo = locations[location.toLowerCase()];
    return response.json(locationInfo);
  }
  client
    .geocode({
      params: {
        address: location,
        key: functions.config().google.key,
      },
      timeout: 5000,
    })
    .then((res) => response.json(res.data))
    .catch((error) => {
      console.log(error, "error");
      response.status(400);
      return response.send(error);
    });
};

module.exports.getSuggestedPlaces = (request, response) => {
  const { search, mock } = url.parse(request.url, true).query;
  if (mock === "true") {
    return response.json(suggestions);
  }
  var config = {
    method: "get",
    url: `https://maps.googleapis.com/maps/api/place/queryautocomplete/json?input=${search}&types=city&key=${
      functions.config().google.key
    }`,
    headers: {},
  };

  axios(config)
    .then((resp) => {
      response.json(resp.data);
    })
    .catch((error) => {
      console.log(error, "error");
    });
};
