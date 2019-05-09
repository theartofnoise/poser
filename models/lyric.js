const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lyricSchema = new Schema({
  userEmail: { type: String, required: true },
  lyricTitle: { type: String, required: true },
  author: { type: String, required: true },
  lyrics: { type: String, required: true},
  music: String,
  date: { type: Date, default: Date.now },
  user:[{ 
    type: Schema.Types.ObjectId, 
    ref: 'User'}]
});

const Lyric = mongoose.model("Lyric", lyricSchema);

module.exports = Lyric;
