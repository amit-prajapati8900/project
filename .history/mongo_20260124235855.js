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
// mongoseModelDate.save()
// .then((res) => console.log(res)) 
// .catch((err) => console.log(err));

const model2 = mongoose.model("model",userSchema);

const newmodel2 = new model2({
name:{
    name:"amit",
    addres:"jaunpur"
},
class:{
    class:"mca",
    grad:"A"
},
age:{
    age:23,
    normal:34
}
});

newmodel2.save();

// mongoseModel.findOneAndUpdate({name:"amit"},{class:"MCA"},{now:true})
// .then((res) => console.log(res)) 
// .catch((err) => console.log(err));


