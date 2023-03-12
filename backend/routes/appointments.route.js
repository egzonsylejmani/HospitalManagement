const express = require("express");
const { AddAppointment, FindAllAppointments, DeleteAppointment, FindSingleAppointment, UpdateAppointment } = require("../controllers/appointments.controller");
const router = express.Router();

router.post("/appointments", AddAppointment);

router.get("/appointments", FindAllAppointments);

router.get("/appointments/:id", FindSingleAppointment);

router.put("/appointments/:id", UpdateAppointment);

router.delete("/appointments/:id", DeleteAppointment);

module.exports = router;
