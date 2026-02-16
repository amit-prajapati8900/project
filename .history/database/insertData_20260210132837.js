const mongoose = require("mongoose");
const Data = require("./data.js");
const User = require("./user.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
  console.log("✅ Database connected");

  // Step 1: Find existing user or create new one
  let user = await User.findOne({ username: "Rahul" });
  if (!user) {
    user = await User.create({
      username: "Rahul",
      email: "rahul@test.com"
    });
  }

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

  // Step 4: Fetch Data and print in Mongo shell style
  const result = await Data.find({}, { owner: 1, name: 1, deg: 1, age: 1, img: 1 });

  result.forEach(doc => {
    console.log(`{
  _id: ObjectId("${doc._id}"),
  name: "${doc.name}",
  deg: "${doc.deg}",
  age: ${doc.age},
  img: "${doc.img}",
  owner: ObjectId("${doc.owner}"),
  __v: ${doc.__v ?? 0}
}`);
  });
}

main().catch(err => console.error(err));
