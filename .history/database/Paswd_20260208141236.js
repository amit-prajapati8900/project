const { string } = require("joi");
const monngoose = require("mongoose");
const passwordLoaclMongoose = require("passport-local-mongoose"); 
main().then((res)=>{console.log("password is working")})
.catch((err)=>console.log(err));
async function main() {
   await monngoose.connect("mongodb://127.0.0.1:27017/pwd");
}

const schemaPwd = new monngoose.Schema({
    email:{
        type:String,
        require:true,
    }
})
schemaPwd.plugin(passwordLoaclMongoose);
const User = monngoose.model("USer",schemaPwd);
module.exports = User;