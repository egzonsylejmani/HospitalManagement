const express= require('express');
const router = express.Router();
const { register, login, forgotpassword, resetpassword, AddUser, FindAllUsers, DeleteUser, FindSingleUser, UpdateUser } = require('../controllers/auth.js');

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/users").post(AddUser);
router.route("/users").get(FindAllUsers);
router.delete("/users/:id", DeleteUser);
router.put("/users/:id", UpdateUser);
router.get("/users/:id", FindSingleUser);
router.route("/forgotpassword").post(forgotpassword);
router.route("/resetpassword/:resetToken").put(resetpassword);




module.exports = router;

