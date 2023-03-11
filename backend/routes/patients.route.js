const express = require("express");
const { AddPatient, FindAllPatients, DeletePatient, FindSinglePatient, UpdatePatient } = require("../controllers/patients.controller");
const router = express.Router();

router.post("/patients", AddPatient);

router.get("/patients", FindAllPatients);

router.get("/patients/:id", FindSinglePatient);

router.put("/patients/:id", UpdatePatient);

router.delete("/patients/:id", DeletePatient);

module.exports = router;
