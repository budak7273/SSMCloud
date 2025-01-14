const express = require("express");
const crypto = require("crypto");

const bcrypt = require("bcryptjs");
const router = express.Router();

const v1Controller = require("../../../controllers/v1");
const isApiKey = require("../../../middleware/is-apikey");
const rateLimit = require("../../../middleware/ratelimit");

router.use(rateLimit.apiLimiter);

router.use("/ssmmod", require("./ssmmod"));

router.post("/login", v1Controller.postLogin);

router.get("/account", isApiKey, v1Controller.getAccount);

router.put(
    "/account",
    isApiKey,
    v1Controller.putAccount,
    v1Controller.getAccount
);

router.get("/users", isApiKey, v1Controller.getUsers);
router.get("/users/:userId", isApiKey, v1Controller.getSingleUser);

router.post("/users", isApiKey, v1Controller.postUsers);

router.get("/servers", isApiKey, v1Controller.getServers);

router.post("/servers", isApiKey, v1Controller.postServers);

router.delete("/servers/:agentid", isApiKey, v1Controller.deleteServer);

router.use("*", (req, res, next) => {
    res.status(404).json({
        success: false,
        error: "Endpoint not found!",
    });
});

module.exports = router;
