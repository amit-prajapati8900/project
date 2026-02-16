const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true }
});

// ✅ Safe check: agar model pehle se compile ho chuka hai to reuse karo
const User = mongoose.models.User || mongoose.model("User", userSchema);

module.exports = User;
