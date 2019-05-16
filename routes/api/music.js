const router = require("express").Router();
const musicController = require("../../controllers/musicController");

// Matches with "/api/books"
router.route("/")
  .get(musicController.findAll)
  .post(musicController.create);

  
router
  .route("/music/:mood")
  .get(musicController.findByMood)

router
  .route("/music/:tempo")
  .get(musicController.findByTempo)

router
  .route("/music/:style")
  .get(musicController.findByStyle)

module.exports = router;
