const request = require('request');
require('dotenv').config()

const url = `http://api.weatherstack.com/current?access_key=${process.env.API_ACCESS_KEY}&query=37.8267,-122.4233`;

request({ url: url, json: true }, (error, response) => {
  let data = response.body;
  console.log(data.current);
});
