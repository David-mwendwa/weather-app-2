const request = require('request');

function forecast(latitude, longitude, callback) {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.API_ACCESS_KEY}&query=${latitude},${longitude}&units=f`;

  request({ url: url, json: true }, (arror, response) => {
    if (arror) {
      callback('Unable to connect to locations server', undefined);
    } else if (response.body.error) {
      callback('Unable to find location, Try another search', undefined);
    } else {
      let data = response.body;
      callback(undefined, data);
    }
  });
}

module.exports = forecast;
