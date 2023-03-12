const express = require("express");
const { AddmedicalTechnicians, FindAllmedicalTechnicians, DeletemedicalTechnicians, FindSinglemedicalTechnician, UpdatemedicalTechnicians } = require("../controllers/medical-technicians.controller");
const router = express.Router();

router.post("/medical-technicians", AddmedicalTechnicians);

router.get("/medical-technicians", FindAllmedicalTechnicians);

router.get("/medical-technicians/:id", FindSinglemedicalTechnician);

router.put("/medical-technicians/:id", UpdatemedicalTechnicians);

router.delete("/medical-technicians/:id", DeletemedicalTechnicians);

module.exports = router;
