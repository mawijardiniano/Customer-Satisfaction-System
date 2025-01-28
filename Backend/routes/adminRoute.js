const express = require("express");
const router = express.Router();
const authenticateToken = require("../middleware/authenticationToken");
const { userLogin, userSignup } = require("../controllers/adminControllers");


router.post("/signup", userSignup);
router.post("/login", userLogin);

module.exports = router;
