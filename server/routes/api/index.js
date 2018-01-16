const router = require("express").Router();
const apiRoutes = require("./apiRoutes");

router.use("/:collection", apiRoutes);

module.exports = router;