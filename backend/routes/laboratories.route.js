const express = require("express");
const { AddLaboratory, FindAllLaboratories, DeleteLaboratory, FindSingleLaboratory, UpdateLaboratory, findAllStaff } = require("../controllers/laboratories.controller");
const router = express.Router();

router.post("/laboratories", AddLaboratory);

router.get("/laboratories", FindAllLaboratories);

router.get("/laboratories/:id", FindSingleLaboratory);

router.put("/laboratories/:id", UpdateLaboratory);

router.delete("/laboratories/:id", DeleteLaboratory);
router.get("/laboratories/specific/:laboratory", findAllStaff);

module.exports = router;
