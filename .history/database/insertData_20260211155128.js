const mongoose = require("mongoose");
const Data = require("./data.js");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
    console.log("Database connected");

    let entries = [
      {
        name: "amit",
        deg: "SSS",
        age: 45,
        img: "https://images.unsplash.com/photo-1769356814870-6a56cbc29007?q=80&w=1170",
      },
      {
        name: "amit",
        deg: "dcfdcb",
        age: 45,
        img: "https://images.unsplash.com/photo-1769356814870-6a56cbc29007?q=80&w=1170",
      },
    ];

    // inject owner field properly
    entries = entries.map((obj) => ({
      ...obj,
      owner: new mongoose.Types.ObjectId("698c51e42ccae8297033f68b"),
    }));

    await Data.insertMany(entries);
    console.log("Data inserted successfully with owner field");

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

main();
