const mongoose = require("mongoose");
const Data = require("./data.js");

async function main() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
    console.log("Database connected");

    // Base entries
    const entries = [
      {
        name: "amit",
        deg: "SSS",
        age: 45,
        img:{
          filename:"listingimg",
          url:"https://images.unsplash.com/photo-1769356814870-6a56cbc29007?q=80&w=1170",  
        }
      },
      {
        name: "amit",
        deg: "dcfdcb",
        age: 45,
       filename:"listingimg",
       url:"https://images.unsplash.com/photo-1769356814870-6a56cbc29007?q=80&w=1170",
     
      },
    ];

    // Overwrite with owner field injected
    const updatedEntries = entries.map((obj) => ({
      ...obj,
      owner: new mongoose.Types.ObjectId("698c51284a5d0429a4e88385"), // 👈 valid ObjectId
    }));

    await Data.deleteMany({}); // optional: clear old data
    await Data.insertMany(updatedEntries);

    console.log("Data inserted successfully with owner field");

    const docs = await Data.find({});
    console.log(docs); // verify owner field is present

    mongoose.connection.close();
  } catch (err) {
    console.error(err);
  }
}

main();
