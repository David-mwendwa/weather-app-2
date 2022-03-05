const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('dotenv').config();

// Forecast

// Geocoding
geocode('Los Angeles', (error, data) => {
  if (error) {
    return console.log(error);
  }
  forecast(data.latitude, data.longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log('Location', data.location);
    console.log(forecastData);
  });
});
