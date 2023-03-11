const express = require("express");
const { AddLaborant, FindAllLaborants, DeleteLaborant, FindSingleLaborant, UpdateLaborant } = require("../controllers/laborants.controller");
const router = express.Router();

router.post("/laborants", AddLaborant);

router.get("/laborants", FindAllLaborants);

router.get("/laborants/:id", FindSingleLaborant);

router.put("/laborants/:id", UpdateLaborant);

router.delete("/laborants/:id", DeleteLaborant);

module.exports = router;
