const express = require("express");
const { AddJanitor, FindAllJanitors, DeleteJanitor, FindSingleJanitor, UpdateJanitor } = require("../controllers/Janitors.controller");
const router = express.Router();

router.post("/janitors", AddJanitor);

router.get("/janitors", FindAllJanitors);

router.get("/janitors/:id", FindSingleJanitor);

router.put("/janitors/:id", UpdateJanitor);

router.delete("/janitors/:id", DeleteJanitor);

module.exports = router;
