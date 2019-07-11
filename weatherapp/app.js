const geoCode = require("./utils/geoCode");
const forecast = require("./utils/forecast");

geoCode("Dhanbad", (error, data) => {
  if (error) {
    return console.log(error);
  }

  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }

    console.log("Location:", data.placeName);
    console.log("Detail:", forecastData);
  });
});
