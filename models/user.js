const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // _id: Schema.Types.ObjectId,
  userEmail: { type: String, required: true },
  userPassword: { type: String, required: true },
  // lyrics: [{ 
  //   type: Schema.Types.ObjectId, 
  //   ref: 'Lyric'}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
