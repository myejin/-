const mongoose = require('mongoose');

const metaSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  site_name: String,
  image: {
    url: String,
  },
});

const Meta = mongoose.model('Meta', metaSchema);
module.exports = Meta;
