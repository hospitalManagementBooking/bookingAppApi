





const mailRouter=require('express').Router();

const mailController=require("../controller/mailController")


mailRouter.post('/sendotp',mailController.sendOtp)
mailRouter.post('/verifyotp',mailController.verifyOtp)




module.exports=mailRouter;