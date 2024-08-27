



const route=require('express').Router();

const multer=require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const userController=require('../controller/userController');


route.post("/adduser", upload.single('image'), userController.addUser);

route.get("/getAll",userController.getAllUsers);





module.exports=route;