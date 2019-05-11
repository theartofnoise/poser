const router = require("express").Router();
const lyricsController = require("../../controllers/lyricsController");

// Matches with "/api/books"
router.route("/")
  .get(lyricsController.findAll)
  .post(lyricsController.create);

// Matches with "/api/books/:id"
router
  .route("/:userEmail")
  .get(lyricsController.findByEmail)
  .put(lyricsController.update)
  .delete(lyricsController.remove);

module.exports = router;
