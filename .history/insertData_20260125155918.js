const mongoose = require("mongoose");
const Data = require("./data.js");
main().then((res)=>{console.log("database is ok")})
.catch((err)=>{console.log(err)})
async function main(){
    mongoose.connect("mongodb://127.0.0.1:27017/jcc");
}
Data.insertMany({
    name:"amit",
    class:"SSS",
    age:45,
}).then(() => console.log("✅ Data inserted"))
 .catch(err => console.error(err));
 module.exports = Data;