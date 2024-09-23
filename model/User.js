

const mongoose=require('./index');



const UserModel = mongoose.model('user', new mongoose.Schema({
    name: String,
    age: Number,
    email:String,
    address:String,
    image: Buffer
}));



module.exports=UserModel;