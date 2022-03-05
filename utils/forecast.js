const request = require('request');

function forecast(latitude, longitude, callback) {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.API_ACCESS_KEY}&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (arror, { body }) => {
    if (arror) {
      callback('Unable to connect to locations server', undefined);
    } else if (body.error) {
      callback('Unable to find location, Try another search', undefined);
    } else {
      callback(undefined, body);
    }
  });
}

module.exports = forecast;
