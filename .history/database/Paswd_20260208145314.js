// const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose").default;
// main().then(() => console.log("DB connected")).catch(err => console.log(err));

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/pwd");
// }

// const schemaPwd = new mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//   },
// },);

// schemaPwd.plugin(passportLocalMongoose);

// const User = mongoose.model("User", schemaPwd);

// module.exports = User;
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

const schemaPwd = new mongoose.Schema({
  email: { type: String, required: true },
});

schemaPwd.plugin(passportLocalMongoose);

const User = mongoose.model("User", schemaPwd);
module.exports = User;

