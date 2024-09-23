const StateModel = require('../model/State');
const CountryModel = require('../model/Country');

const addState = async (req, res) => {
    try {
        // Check if the countryId exists
        const existingCountry = await CountryModel.findById(req.body.countryId);
        if (!existingCountry) {
            return res.status(400).send({ error: 'Invalid countryId. Please provide a valid country.' });
        }

        // Check if the stateCode already exists
        const existingState = await StateModel.findOne({ stateCode: req.body.stateCode });
        if (existingState) {
            return res.status(400).send({ error: 'State already exists. Please use a different State.' });
        }

        // Create a new state
        const newState = new StateModel({
            stateCode: req.body.stateCode,
            stateName: req.body.stateName,
            countryId: req.body.countryId
        });

        // Save the state to the database
        const savedState = await newState.save();
        res.status(201).send(savedState); // Send the saved state back in the response
    } catch (err) {
        console.error('Error saving the state:', err);
        res.status(500).send({ error: 'Error saving the state' });
    }
};



// const getAllState = async (req, res) => {
//     try {
//         const result = await StateModel.find(); 
//         res.send(result);
//     } catch (err) {
//         console.error('Error fetching users:', err);
//         res.status(500).send({ error: 'Error fetching users' });
//     }
// };


const getAllState = async (req, res) => {
    try {
        const result = await StateModel.find().populate('countryId'); // Populate countryId with country details
        res.send(result);
    } catch (err) {
        console.error('Error fetching states:', err);
        res.status(500).send({ error: 'Error fetching states' });
    }
};


// Ensure mongoose is imported

const getStatesByCountryId = async (req, res) => {
    const { countryId } = req.params; // Assume countryId is passed as a URL parameter
    console.log(countryId);

    try {


        const result = await StateModel.find({ countryId: countryId })
            .populate('countryId'); // Populate countryId with country details

        console.log(result); // Log the result for debugging

        if (result.length === 0) {
            return res.status(404).send({ error: 'No states found for the given country ID.' });
        }

        res.send(result);
    } catch (err) {
        console.error('Error fetching states by country ID:', err);
        res.status(500).send({ error: 'Error fetching states' });
    }
};

module.exports = { addState, getAllState, getStatesByCountryId };