const CountryModel = require('../model/Country');

const addCountry = async (req, res) => {
    try {
        

        const existingUser = await CountryModel.findOne({ countryCode: req.body.countryCode });
        if (existingUser) {
            return res.status(400).send({ error: 'Country already exists. Please use a different country .' });
        }

        const list = new CountryModel({
            countryCode: req.body.countryCode,
            countryName: req.body.countryName,
            dialCode: req.body.dialCode
        });
      
        const savedList = await list.save(); // Save the user to the database
        res.status(201).send(savedList); // Send the saved user back in the response
    } catch (err) {
        console.error('Error saving the list:', err);
        res.status(500).send({ error: 'Error saving the list' });
    }
};



const getAllCountry = async (req, res) => {
    try {
        const result = await CountryModel.find(); 
        res.send(result);
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send({ error: 'Error fetching users' });
    }
};

module.exports = { addCountry ,getAllCountry};