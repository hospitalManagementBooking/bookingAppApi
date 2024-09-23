const mongoose = require('./index');

const CountryModel = mongoose.model('country', new mongoose.Schema({
  countryCode: String,
  countryName: String,
  dialCode: String
}));

module.exports = CountryModel;