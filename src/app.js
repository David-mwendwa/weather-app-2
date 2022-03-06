const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'David Mwendwa',
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
    name: 'David Mwendwa'
  });
});

app.get('/help', (req, res) => {
  res.render('help', {
    title: 'Help',
    name: 'David Mwendwa',
    helpText: 'Please contact us for help'
  });
});

app.use('/weather', (req, res) => {
  res.send('Weather page');
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
