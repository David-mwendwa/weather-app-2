const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');
require('dotenv').config();

// Forecast
forecast(-1.3951197424301387, 36.76368008184649, (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});

// Geocoding
geocode('Los Angeles', (error, data) => {
  console.log('Error', error);
  console.log('Data', data);
});
