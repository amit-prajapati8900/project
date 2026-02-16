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

  // Step 2: Prepare records with owner reference
  const records = [
    {
      name: "amit",
      deg: "SSS",
      age: 45,
      img: "https://images.unsplash.com/photo-1769356814870-6a56cbc29007"
    },
    {
      name: "amit",
      deg: "dcfdcb",
      age: 45,
      img: "https://images.unsplash.com/photo-1769356814870-6a56cbc29007"
    }
  ].map(obj => ({ ...obj, owner: user._id }));

  // Step 3: Insert Data
  await Data.insertMany(records);
  console.log("✅ Data inserted");

  // Step 4: Fetch Data with populated owner details
  const result = await Data.find().populate("owner", "username email"); 
  // yaha "username email" likhne se sirf ye fields aayengi
  console.log("📌 Populated Result:", result);
}

main().catch(err => console.error(err));
