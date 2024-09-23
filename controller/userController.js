const UserModel = require('../model/User');

const addUser = async (req, res) => {
    try {
        console.log(req.body); // Log the text fields
        console.log(req.file); // Log the uploaded file info

        const existingUser = await UserModel.findOne({ email: req.body.email });
        if (existingUser) {
            return res.status(400).send({ error: 'Email already exists. Please use a different email.' });
        }

        // Create a new user instance with the data from the request
        const list = new UserModel({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
            address: req.body.address,
            image: req.file.buffer // Save the image as a Buffer
        });
      
        const savedList = await list.save(); // Save the user to the database
        res.status(201).send(savedList); // Send the saved user back in the response
    } catch (err) {
        console.error('Error saving the list:', err);
        res.status(500).send({ error: 'Error saving the list' });
    }
};



const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find(); // Fetch all users

        // Map through users to include Base64 image strings
        const usersWithImages = users.map(user => {
            const imageBase64 = user.image ? user.image.toString('base64') : null; // Convert image buffer to Base64
            const imageSrc = imageBase64 ? `data:image/jpeg;base64,${imageBase64}` : null; // Create the image source string

            return {
                id: user._id, // Include the user ID
                name: user.name,
                age: user.age,
                email: user.email,
                address: user.address,
                image: imageSrc // Include the Base64 image string
            };
        });

        res.send(usersWithImages); // Send the array of users with images
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send({ error: 'Error fetching users' });
    }
};

module.exports = { addUser ,getAllUsers};