
const DistrictModel = require('../model/District'); // Adjust the path to your DistrictModel

// const insertDistricts = async () => {
//     // The retrieved state ID from your existing state document
//     const stateId = "66f11986f008009da31c27cd"

//     const districts = [
//         { districtCode: 'TN-ARI', districtName: 'Ariyalur', stateId: stateId },
//         { districtCode: 'TN-CHN', districtName: 'Chennai', stateId: stateId },
//         { districtCode: 'TN-CBE', districtName: 'Coimbatore', stateId: stateId },
//         { districtCode: 'TN-CUD', districtName: 'Cuddalore', stateId: stateId },
//         { districtCode: 'TN-DHA', districtName: 'Dharmapuri', stateId: stateId },
//         { districtCode: 'TN-DIN', districtName: 'Dindigul', stateId: stateId },
//         { districtCode: 'TN-ERD', districtName: 'Erode', stateId: stateId },
//         { districtCode: 'TN-KAN', districtName: 'Kanchipuram', stateId: stateId },
//         { districtCode: 'TN-KAR', districtName: 'Kanyakumari', stateId: stateId },
//         { districtCode: 'TN-KARU', districtName: 'Karur', stateId: stateId },
//         { districtCode: 'TN-KRI', districtName: 'Krishnagiri', stateId: stateId },
//         { districtCode: 'TN-MAD', districtName: 'Madurai', stateId: stateId },
//         { districtCode: 'TN-NAG', districtName: 'Nagapattinam', stateId: stateId },
//         { districtCode: 'TN-NAM', districtName: 'Namakkal', stateId: stateId },
//         { districtCode: 'TN-PER', districtName: 'Perambalur', stateId: stateId },
//         { districtCode: 'TN-PUD', districtName: 'Pudukkottai', stateId: stateId },
//         { districtCode: 'TN-RAM', districtName: 'Ramanathapuram', stateId: stateId },
//         { districtCode: 'TN-SAL', districtName: 'Salem', stateId: stateId },
//         { districtCode: 'TN-SIV', districtName: 'Sivaganga', stateId: stateId },
//         { districtCode: 'TN-THA', districtName: 'Thanjavur', stateId: stateId },
//         { districtCode: 'TN-THEN', districtName: 'Theni', stateId: stateId },
//         { districtCode: 'TN-THO', districtName: 'Thoothukudi', stateId: stateId },
//         { districtCode: 'TN-TRI', districtName: 'Tiruchirappalli', stateId: stateId },
//         { districtCode: 'TN-TIRU', districtName: 'Tirunelveli', stateId: stateId },
//         { districtCode: 'TN-TIRV', districtName: 'Tiruvallur', stateId: stateId },
//         { districtCode: 'TN-TIRV1', districtName: 'Tiruvannamalai', stateId: stateId },
//         { districtCode: 'TN-TIRU2', districtName: 'Tiruvarur', stateId: stateId },
//         { districtCode: 'TN-VEL', districtName: 'Vellore', stateId: stateId },
//         { districtCode: 'TN-VIL', districtName: 'Viluppuram', stateId: stateId },
//         { districtCode: 'TN-VIR', districtName: 'Virudhunagar', stateId: stateId },
//         { districtCode: 'TN-NIL', districtName: 'Nilgiris', stateId: stateId },
//         { districtCode: 'TN-TNK', districtName: 'Tenkasi', stateId: stateId },
//         { districtCode: 'TN-KAL', districtName: 'Kallakurichi', stateId: stateId },
//         { districtCode: 'TN-CHE', districtName: 'Chengalpattu', stateId: stateId },
//         { districtCode: 'TN-TIR', districtName: 'Tirupathur', stateId: stateId },
//         { districtCode: 'TN-RAN', districtName: 'Ranipet', stateId: stateId },
//         { districtCode: 'TN-MAY', districtName: 'Mayiladuthurai', stateId: stateId },
//         { districtCode: 'TN-KAN1', districtName: 'Kanyakumari', stateId: stateId }
//     ];

//     try {
//         // Insert districts into the database
//         await DistrictModel.insertMany(districts);
//         console.log('Districts inserted successfully');
//     } catch (err) {
//         console.error('Error inserting districts:', err);
//     }
// };

// Call the insert function (make sure your connection to MongoDB is established before calling)



const getAlldistrict = async (req, res) => {
    try {
        const result = await DistrictModel.find().populate('stateId'); // Populate countryId with country details
        res.send(result);
    } catch (err) {
        console.error('Error fetching states:', err);
        res.status(500).send({ error: 'Error fetching states' });
    }
};



const getdistrictById = async (req, res) => {
    const { stateId } = req.params; // Assume countryId is passed as a URL parameter


    try {


        const result = await DistrictModel.find({ stateId: stateId })
            .populate('stateId'); // Populate countryId with country details

        console.log(result); // Log the result for debugging

        if (result.length === 0) {
            return res.status(404).send({ error: 'No district found for the given stateId ID.' });
        }

        res.send(result);
    } catch (err) {
        console.error('Error fetching district by stateId:', err);
        res.status(500).send({ error: 'Error fetching district' });
    }
};
module.exports = { getAlldistrict,getdistrictById};