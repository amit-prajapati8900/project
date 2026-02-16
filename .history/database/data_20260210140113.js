const dataSchema = new mongoose.Schema({
  name: { type: String, required: true },
  deg: { type: String, required: true },
  age: { type: Number, required: true },
  img: { type: String },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User" }
});

// ✅ Pre-save hook to auto-assign owner if not set
dataSchema.pre("save", async function(next) {
  if (!this.owner) {
    const User = mongoose.model("User");
    let user = await User.findOne({ username: "Rahul" });
    if (!user) {
      user = await User.create({ username: "Rahul", email: "rahul@test.com" });
    }
    this.owner = user._id;
  }
  next();
});

const Data = mongoose.models.Data || mongoose.model("Data", dataSchema);
module.exports = Data;
