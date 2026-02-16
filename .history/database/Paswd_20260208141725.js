const { string } = require("joi");
const mongoose = require("mongoose");
const passwordLoaclMongoose = require("passport-local-mongoose");
main().then((res)=>{console.log("password is working")})
.catch((err)=>console.log(err));
async function main() {
   await mongoose.connect("mongodb://127.0.0.1:27017/pwd");
}

const schemaPwd = new mongoose.Schema({
    email:{
        type:String,
        require:true,
    }
})
schemaPwd.plugin(passwordLoaclMongoose);
const User = mongoose.model("User",schemaPwd);
module.exports = User;