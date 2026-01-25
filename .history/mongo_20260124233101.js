const mongoose = require("mongoose");
main().then((res)=>{console.log("ami is working")})
.catch((err)=>{console.log(err)});

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/iics");
}
const userSchema = new mongoose.Schema({
    name:String,
    class:String,
    age:Number,
});

const amit= mongoose.model("amit",userSchema);

const mongoseModelDate = new amit({
    name:"amit",
    class:"bca",
    age:443
})
mongoseModel.find({})
.then((res) => console.log(res)) 
.catch((err) => console.log(err));

