const express = require("express");
const { AddWard, FindAllWards, DeleteWard, FindSingleWard, UpdateWard, findAllStaff } = require("../controllers/wards.controller");

const router = express.Router();

router.post("/wards", AddWard);

router.get("/wards", FindAllWards);

router.get("/wards/:id", FindSingleWard);

router.put("/wards/:id", UpdateWard);

router.delete("/wards/:id", DeleteWard);

router.get("/wards/specific/:ward", findAllStaff);

module.exports = router;
