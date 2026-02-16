const mongoose = require("mongoose");
const Data = require("./data.js");
main().then((res)=>{console.log("database is ok")})
.catch((err)=>{console.log(err)})
async function main(){
await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
console.log("insert point");
}
    const entries = [
      {
        name: "amit",
        deg: "SSS",
        age: 45,
        img: "https://images.unsplash.com/photo-1769356814870-6a56cbc29007?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // owner: "698c51e42ccae8297033f68b", // 👈 owner added
      },
      {
        name: "amit",
        deg: "dcfdcb",
        age: 45,
        img: "https://images.unsplash.com/photo-1769356814870-6a56cbc29007?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        // owner: "698c51e42ccae8297033f68b", // 👈 owner added
      },
    ];

 entries = entries.map((obj) => ({...obj,owner: "698c51e42ccae8297033f68b",}));
await Data.insertMany(entries);
// .then(() => console.log(" Data inserted"))
//  .catch(err => console.error(err));
// //  module.exports = Data;
