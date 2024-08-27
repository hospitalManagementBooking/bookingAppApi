const cron = require('node-cron');
const Otp = require('../model/otp');

// Task to delete expired OTPs every minute
cron.schedule('* * * * *', async () => {
    try {
        await Otp.deleteMany({ created_at: { $lt: new Date(Date.now() - 5 * 60 * 1000) } });
        console.log('Old OTPs deleted successfully!');
    } catch (error) {
        console.error('Error deleting OTPs:', error);
    }
});

// Add more cron jobs here as needed

module.exports = cron;
