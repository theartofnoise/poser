const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lyricSchema = new Schema({
  lyricTitle: { type: String, required: true },
  author: { type: String, required: true },
  music: String,
  date: { type: Date, default: Date.now }
});

const Lyric = mongoose.model("Lyric", lyricSchema);

module.exports = Lyric;
