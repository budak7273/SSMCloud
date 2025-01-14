const path = require("path");

const express = require("express");
const isAuth = require("../../middleware/is-auth");
const dashboardController = require("../../controllers/dashboard");

const { check, body } = require("express-validator");

const router = express.Router();

router.post("/installmod", isAuth, dashboardController.postInstallMod);

router.post("/uninstallmod", isAuth, dashboardController.postUninstallMod);

module.exports = router;
