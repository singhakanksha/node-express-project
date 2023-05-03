const { request } = require("express");
const express = require("express");
const validateToken = require("../middleware/validateTokenHandler");
const {registerUser, loginUser, currentUser} = require("./controllers/userController")

const router = express.Router();

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/current", validateToken, currentUser)

module.exports = router;