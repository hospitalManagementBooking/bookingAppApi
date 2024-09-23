const mongoose = require('./index'); // Adjust the path to your mongoose connection

const DistrictSchema = new mongoose.Schema({
    districtCode: { type: String, required: true },
    districtName: { type: String, required: true },
    stateId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'state' } // Reference to the State model
});

const DistrictModel = mongoose.model('district', DistrictSchema);

module.exports = DistrictModel;