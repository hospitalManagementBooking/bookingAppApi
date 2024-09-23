const mongoose = require('../model/index'); // Adjust the path to your mongoose connection

const hospitalSchema = new mongoose.Schema({
    hospitalName: { type: String, required: true },
    hospitalAddress: { type: String, required: true },
    country: { type: String, required: true },
    state: { type: String, required: true },
    district: { type: String, required: true },
    zipcode: { 
        type: String, 
        required: true, 
        minlength: 6, 
        maxlength: 6 
    },
    email: { 
        type: String, 
        required: true, 
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.']
    },
    contact: { 
        type: String, 
        required: true,
        match: [/^\d{10}$/, 'Please enter a valid 10-digit contact number.']  
    },
    availability: { type: String, required: true },
    
    hospitalPic: {
        data: Buffer,  // Store the image as a buffer
        contentType: String, // Store the MIME type (e.g., 'image/jpeg')
        originalName: String // Store the original file name
    },
    
    doc: {
        data: Buffer,  // Store the document as a buffer
        contentType: String, // Store the MIME type (e.g., 'application/pdf')
        originalName: String // Store the original file name
    },

    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

const hospitalModel = mongoose.model('Hospital', hospitalSchema);

module.exports = hospitalModel;
