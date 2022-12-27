const express = require("express");

const router = express.Router();

router.use("/agent", require("./agent"));
router.use("/v1", require("./public"));

module.exports = router;
