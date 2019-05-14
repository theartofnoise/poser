const router = require("express").Router();
const lyricsController = require("../../controllers/lyricsController");

// Matches with "/api/books"
router.route("/")
  .get(lyricsController.findAll)
  .post(lyricsController.create);

// Matches with "/api/books/:id"
router
  .route("/:userEmail")
  .get(lyricsController.findByEmail);
  
  router
  .route("/lyrics/:id")
  .put(lyricsController.update)
  .get(lyricsController.getLyricById)
  .delete(lyricsController.remove);

module.exports = router;
