 const mongoose = require("mongoose");
const Data = require("./data.js");
main().then((res)=>{console.log("database is ok")})
.catch((err)=>{console.log(err)})
async function main(){
 await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
console.log("insert point");
}
Data.insertMany([{
    name:"amit",
    deg:"SSS",
    age:45
},{
    name:"amit",
    deg:"dcfdcb",
    age:45
},{
    name:"jackson",
    deg:"OOP",
    age:90
},{
    name:"halu",
    deg:"DDF",
    age:90
},{
    name:"BSO",
    deg:"CTC",
    age:43
}])
.then(() => console.log(" Data inserted"))
 .catch(err => console.error(err));
//  module.exports = Data;


//  const mongoose = require("mongoose");
// const Data = require("./data.js");

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
//   console.log("✅ Database connected");

//   await Data.insertMany([
//     { name: "amit", deg: "SSS", age: 45 },
//     { name: "rahul", deg: "BXC", age: 22 }   // 👈 aur data yahan add kar sakte ho
//   ]);

//   console.log("✅ Seed data inserted");
//   mongoose.connection.close();   // 👈 connection close karna zaruri hai
// }

// main().catch(err => console.error(err));
