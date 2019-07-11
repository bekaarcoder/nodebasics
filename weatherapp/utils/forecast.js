const request = require("request");

const forecast = (lat, long, callback) => {
  const url = `https://api.darksky.net/forecast/ca73f9d5567e13f6436a53b7a22ab7b7/${encodeURIComponent(
    long
  )},${encodeURIComponent(lat)}`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather service.", undefined);
    } else if (response.body.error) {
      callback("Unable to find the location. Try another search...", undefined);
    } else {
      callback(
        undefined,
        `${response.body.currently.summary}. It is ${
          response.body.currently.temperature
        } degrees out there. There is ${
          response.body.currently.precipProbability
        }% chance of rain.`
      );
    }
  });
};

module.exports = forecast;
