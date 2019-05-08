const router = require("express").Router();
const lyricsController = require("../../controllers/lyricsController");

// Matches with "/api/books"
router.route("/")
  .get(lyricsController.findAll)
  .post(lyricsController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(lyricsController.findById)
  .put(lyricsController.update)
  .delete(lyricsController.remove);

module.exports = router;
