const request = require("request");

const geoCode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=pk.eyJ1IjoiYmxpdHpzdHJpa2VyIiwiYSI6ImNqeHVvdXF2NTA3cHczY25vcHdkZmlmbmwifQ.1VWIVwIIqiVyCJS22tVz3A`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services.", undefined);
    } else if (response.body.features.length === 0) {
      callback("Unable to find the location. Try another search...", undefined);
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        placeName: response.body.features[0].place_name
      });
    }
  });
};

module.exports = geoCode;
