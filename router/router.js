



const route=require('express').Router();

const multer=require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const userController=require('../controller/userController');

const countryController=require('../controller/countryController');

const stateController=require('../controller/stateController');

const districtController=require('../controller/districtController');


route.post("/adduser", upload.single('image'), userController.addUser);

route.get("/getAll",userController.getAllUsers);


route.post("/addcountry",countryController.addCountry);

route.get("/getAllCountry",countryController.getAllCountry);


route.post("/addstate",stateController.addState);

route.get("/getAllState",stateController.getAllState);

route.get("/getStateByCountryId/:countryId",stateController.getStatesByCountryId);


// route.post("/adddistrict",districtController.insertDistricts);

route.get("/getAllDistrict",districtController.getAlldistrict);
route.get("/getDistrictByStateId/:stateId",districtController.getdistrictById);




module.exports=route;