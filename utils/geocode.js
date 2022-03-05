const request = require('request');

function geocode(address, callback) {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoia2xhdHpkYXZpZTE5IiwiYSI6ImNsMGNvcWE4aTAxOWsza3A5Z2t5bGx5MHcifQ.V9OzXcK4VA5i4x_-BJd_Xw&limit=1`;

  request({ url: url, json: true }, (err, { body }) => {
    if (err) {
      callback('Unable to connect to locations server', undefined);
    } else if (body.features.length === 0) {
      callback('Unable to find location, Try another search', undefined);
    } else {
      callback(undefined, {
        longitude: body.features[0].center[0],
        latitude: body.features[0].center[1],
        location: body.features[0].place_name,
      });
    }
  });
}

module.exports = geocode;
