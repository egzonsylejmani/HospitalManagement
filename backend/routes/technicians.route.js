const express = require("express");
const { AddTechnician, FindAllTechnicians, DeleteTechnician, FindSingleTechnician, UpdateTechnician } = require("../controllers/technicians.controller");
const router = express.Router();

router.post("/technicians", AddTechnician);

router.get("/technicians", FindAllTechnicians);

router.get("/technicians/:id", FindSingleTechnician);

router.put("/technicians/:id", UpdateTechnician);

router.delete("/technicians/:id", DeleteTechnician);

module.exports = router;
