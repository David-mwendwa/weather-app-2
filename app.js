const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('dotenv').config();

geocode('Los Angeles', (error, { latitude, longitude, location }) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log('Location', location);
    console.log(forecastData);
  });
});
