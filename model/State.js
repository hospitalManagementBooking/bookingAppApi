const mongoose = require('./index');

const StateModel = mongoose.model('state', new mongoose.Schema({
  stateCode: String,
  stateName: String,
  countryId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'country' } // Reference to the Country model
}));

module.exports = StateModel;