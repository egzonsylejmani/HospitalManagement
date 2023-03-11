const express = require("express");
const { AddDoctor, FindAllDoctors, DeleteDoctor, FindSingleDoctor, UpdateDoctor } = require("../controllers/doctors.controller");
const router = express.Router();

router.post("/doctors", AddDoctor);

router.get("/doctors", FindAllDoctors);

router.get("/doctors/:id", FindSingleDoctor);

router.put("/doctors/:id", UpdateDoctor);

router.delete("/doctors/:id", DeleteDoctor);

module.exports = router;
