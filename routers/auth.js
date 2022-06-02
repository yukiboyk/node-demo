const userController = require("../controllers/UserController");
const authController = require("../controllers/authController");

const router = require("express").Router();

router.post("/register", authController.registerUser);
router.get("/GET_ALL_USERS",userController.getAllUser);

module.exports = router;