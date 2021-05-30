const mongoose= require('mongoose');
const Schema= mongoose.Schema;

let UserSchema=new Schema({
    username:{type:String,required:true},
    password:{type:String, required:true}
});

const Login = mongoose.model('user', UserSchema);

module.exports = Login;
