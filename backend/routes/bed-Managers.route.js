const express = require("express");
const { AddbedManager, FindAllbedManagers, DeletebedManager, FindSinglebedManager, UpdatebedManager } = require("../controllers/bed-managers.controller");
const router = express.Router();

router.post("/bedManager", AddbedManager);

router.get("/bedManager", FindAllbedManagers);

router.get("/bedManager/:id", FindSinglebedManager);

router.put("/bedManager/:id", UpdatebedManager);

router.delete("/bedManager/:id", DeletebedManager);

module.exports = router;
