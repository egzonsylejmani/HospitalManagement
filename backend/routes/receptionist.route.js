const express = require("express");
const { Addreceptionist, FindAllreceptionists, FindSinglereceptionist, Updatereceptionist, Deletereceptionist } = require("../controllers/receptionist.controller");
const router = express.Router();

router.post("/receptionist", Addreceptionist);

router.get("/receptionist", FindAllreceptionists);

router.get("/receptionist/:id", FindSinglereceptionist);

router.put("/receptionist/:id", Updatereceptionist);

router.delete("/receptionist/:id", Deletereceptionist);

module.exports = router;
