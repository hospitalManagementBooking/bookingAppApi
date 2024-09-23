






const hospiatlRouter=require('express').Router();

const multer=require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const hospitalController=require('../controller/HospitalController');

hospiatlRouter.post('/addHospital', upload.fields([{ name: 'hospitalPic', maxCount: 1 }, { name: 'doc', maxCount: 1 }]),hospitalController.addHospital)

hospiatlRouter.get('/getAllHospitals',hospitalController.getAllHospitals);

module.exports=hospiatlRouter;