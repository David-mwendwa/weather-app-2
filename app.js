const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('dotenv').config();

geocode('Ongata rongai', (error, { latitude, longitude, location } = {}) => {
  if (error) {
    return console.log(error);
  }
  forecast(latitude, longitude, (error, forecastData) => {
    if (error) {
      return console.log(error);
    }
    console.log('Location', location);
    console.log('latitude', latitude);
    console.log('longitude', longitude);
    console.log(forecastData);
  });
});
