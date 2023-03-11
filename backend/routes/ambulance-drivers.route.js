const express = require("express");
const { AddambulanceDrivers, FindAllambulanceDrivers, DeleteambulanceDrivers, FindSingleambulanceDriver, UpdateambulanceDrivers } = require("../controllers/ambulance-drivers.controller");
const router = express.Router();

router.post("/ambulance-drivers", AddambulanceDrivers);

router.get("/ambulance-drivers", FindAllambulanceDrivers);

router.get("/ambulance-drivers/:id", FindSingleambulanceDriver);

router.put("/ambulance-drivers/:id", UpdateambulanceDrivers);

router.delete("/ambulance-drivers/:id", DeleteambulanceDrivers);

module.exports = router;
