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

const mongoseModel= mongoose.model("mongoseModel",userSchema);

const mongoseModelDate = new mongoseModel({
    name:"amit",
    class:"bca",
    age:443
})
mongoseModel.findByIdAndUpdate("69750300af7291c8bdd1b38b",{name:"jackson"}) 
.then((res) => console.log(res)) 
.catch((err) => console.log(err));

