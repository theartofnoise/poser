const router = require("express").Router();
const userRoutes = require("./users");
const lyricRoutes = require("./lyrics");

// Book routes
router.use("/users", userRoutes);
router.use("/lyrics", lyricRoutes);

module.exports = router;
