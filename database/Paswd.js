const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose").default;
const dbUrl=process.env.ATLASDB_URL;

main().then(() => console.log("DB connected")).catch(err => console.log(err));

async function main() {
  await mongoose.connect(dbUrl);
}

const schemaPwd = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
},);
schemaPwd.plugin(passportLocalMongoose);

const User = mongoose.model("User", schemaPwd);

module.exports = User;
