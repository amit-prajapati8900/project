const mongoose = require("mongoose");
const Data = require("./data.js");
const User = require("./user.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
  console.log("✅ Database connected");

  // Step 1: Create a User
  const user = await User.create({
    username: "Rahul",
    email: "rahul@test.com"
  });

  // Step 2: Insert Data with owner reference
  await Data.insertMany([
    {
      name: "amit",
      deg: "SSS",
      age: 45,
      img: "https://images.unsplash.com/photo-1769356814870-6a56cbc29007",
      owner: user._id
    },
    {
      name: "amit",
      deg: "dcfdcb",
      age: 45,
      img: "https://images.unsplash.com/photo-1769356814870-6a56cbc29007",
      owner: user._id
    }
  ]);

  console.log("✅ Data inserted");

  // Step 3: Fetch Data with populated owner details
  const result = await Data.find().populate("owner");
  console.log("📌 Populated Result:", result);
}

main().catch(err => console.error(err));
