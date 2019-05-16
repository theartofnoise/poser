const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const musicSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  mood: { type: String, required: true },
  style: { type: String, required: true},
  tempo: String,
 
});

const Music = mongoose.model("Music", musicSchema);

module.exports = Music;
