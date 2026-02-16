const user = await User.findOne({ username: "Rahul" }); // ya create karo agar nahi hai

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
  },
  {
    name: "EEEEE",
    deg: "DSA",
    age: 66,
    img: "https://plus.unsplash.com/premium_photo-1725404428224-664f5f0217b3"
  }
].map(obj => ({ ...obj, owner: user._id })); // sabhi me owner inject ho jaayega

await Data.insertMany(records);
