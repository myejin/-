const express = require('express');
const meta = require('./routes/meta');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', meta);

mongoose.connect('mongodb://mongo/Meta', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('We are connected!');
});

app.listen(3000, () => {
  console.log('Listening on port');
});

app.get('/', (req, res) => {
  res.send('hi root');
});
