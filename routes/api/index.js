const router = require("express").Router();
const userRoutes = require("./users");
const lyricRoutes = require("./lyrics");
const musicRoutes = require("./music");
// var Spotify = require('node-spotify-api');

// var keys = {
//     id: process.env.REACT_APP_SPOTIFY_ID,
//     secret: process.env.REACT_APP_SPOTIFY_SECRET
// }
// var spotify = new Spotify(keys);

// Book routes
router.use("/users", userRoutes);
router.use("/lyrics", lyricRoutes);
router.use("/music", musicRoutes);

// router.use("/spotify", function(req, res){
//     spotify.search({ type: 'playlist', include_external:'audio', query: "instrumental", limit: 1}, function(err, data) {
//         res.json(data)

//       });
// })

module.exports = router;
