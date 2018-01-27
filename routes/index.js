//const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api/apiRoutes");
const oktaRoutes = require("./api/users");
const emailRoutes = require("./api/emailRoutes");

router.use("/api", apiRoutes);
router.use("/apiokta", oktaRoutes);
router.use("/email", emailRoutes)
// If no API routes are hit, send the React app
/*router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});*/

module.exports = router;