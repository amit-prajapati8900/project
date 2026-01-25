const express = require("express");
const mongoose = require("mongoose");
const Data = require("./data.js");

const app = express();

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/jcc");
  console.log("✅ Database is working");
}
main();

app.get("/home", async (req, res) => {
  const alldata = await Data.find();   // ✅ fetch all documents
  res.json(alldata);                   // ✅ send as JSON
});

app.listen(2000, () => {
  console.log("🚀 Express is working on port 2000");
});
