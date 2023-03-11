const express = require("express");
const { FindAllStaff } = require("../controllers/staff.controller");

const router = express.Router();

router.get("/staff", FindAllStaff);

module.exports = router;
