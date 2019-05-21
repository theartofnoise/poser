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
  .delete(lyricsController.remove)
  .put(lyricsController.update)
  .get(lyricsController.getLyricById);

  // router.post("/delete/:id", (req, res)=> {
  //   console.log("Backend")
  //   res.json({ message : "here"})
  // })

module.exports = router;
