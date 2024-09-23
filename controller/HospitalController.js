const hospitalModel = require('../model/hospitalRegister'); // Import the Hospital model

const addHospital = async (req, res) => {
    try {
        console.log(req.body); // Log the text fields
        console.log(req.files); // Log the uploaded files info

        const existingHospital = await hospitalModel.findOne({ email: req.body.email });
        if (existingHospital) {
            return res.status(400).send({ error: 'Email already exists. Please use a different email.' });
        }

        // Create a new hospital instance with the data from the request
        const hospital = new hospitalModel({
            hospitalName: req.body.hospitalName,
            hospitalAddress: req.body.hospitalAddress,
            country: req.body.country,
            state: req.body.state,
            district: req.body.district,
            zipcode: req.body.zipcode,
            email: req.body.email,
            contact: req.body.contact,
            availability: req.body.availability,
            hospitalPic: {
                data: req.files.hospitalPic[0].buffer, // Store the file buffer
                contentType: req.files.hospitalPic[0].mimetype, // Store the MIME type
                originalName: req.files.hospitalPic[0].originalname // Store the original file name
            },
            doc: {
                data: req.files.doc[0].buffer, // Store the file buffer
                contentType: req.files.doc[0].mimetype, // Store the MIME type
                originalName: req.files.doc[0].originalname // Store the original file name
            }
        });

        const savedHospital = await hospital.save(); // Save the hospital to the database
        res.status(201).send(savedHospital); // Send the saved hospital back in the response
    } catch (err) {
        console.error('Error saving the hospital:', err);
        res.status(500).send({ error: 'Error saving the hospital' });
    }
};


const getAllHospitals = async (req, res) => {
    try {
        const hospitals = await hospitalModel.find(); // Fetch all hospitals

        // Map through hospitals to include file metadata and content
        const hospitalsWithFiles = hospitals.map(hospital => {
            const hospitalPicBase64 = hospital.hospitalPic.data ? hospital.hospitalPic.data.toString('base64') : null;
            const docBase64 = hospital.doc.data ? hospital.doc.data.toString('base64') : null;

            return {
                id: hospital._id,
                hospitalName: hospital.hospitalName,
                hospitalAddress: hospital.hospitalAddress,
                country: hospital.country,
                state: hospital.state,
                district: hospital.district,
                zipcode: hospital.zipcode,
                email: hospital.email,
                contact: hospital.contact,
                availability: hospital.availability,

                // Image data
                hospitalPic: {
                    data: hospitalPicBase64 ? `data:${hospital.hospitalPic.contentType};base64,${hospitalPicBase64}` : null,
                    originalName: hospital.hospitalPic.originalName // Send the original file name
                },

                // Document data
                doc: {
                    data: docBase64 ? `data:${hospital.doc.contentType};base64,${docBase64}` : null,
                    originalName: hospital.doc.originalName // Send the original file name
                }
            };
        });

        res.send(hospitalsWithFiles); // Send the array of hospitals with files
    } catch (err) {
        console.error('Error fetching hospitals:', err);
        res.status(500).send({ error: 'Error fetching hospitals' });
    }
};

module.exports = { addHospital, getAllHospitals }; 
