const functions = require("firebase-functions");
const { geocodeRequest, getSuggestedPlaces } = require("./geocode");
const { restaurantRequest } = require("./restaurants");
const { Client } = require("@googlemaps/google-maps-services-js");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
const client = new Client({});
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", { structuredData: true });
//   response.send("Hello from Firebase!");
// });

exports.geocode = functions.https.onRequest((request, response) => {
  geocodeRequest(request, response, client);
});

exports.restaurants = functions.https.onRequest((requests, response) => {
  restaurantRequest(requests, response, client);
});

exports.autocomplete = functions.https.onRequest((request, response) => {
  getSuggestedPlaces(request, response);
});
