const express = require("express");
const { AddNurse, FindAllNurses, DeleteNurse, FindSingleNurse, UpdateNurse } = require("../controllers/nurses.controller");
const router = express.Router();

router.post("/nurses", AddNurse);

router.get("/nurses", FindAllNurses);

router.get("/nurses/:id", FindSingleNurse);

router.put("/nurses/:id", UpdateNurse);

router.delete("/nurses/:id", DeleteNurse);

module.exports = router;
