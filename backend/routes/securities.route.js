const express = require("express");
const { AddSecurity, FindAllSecurites, DeleteSecurity, FindSingleSecurity, UpdateSecurity } = require("../controllers/securities.controller");
const router = express.Router();

router.post("/securities", AddSecurity);

router.get("/securities", FindAllSecurites);

router.get("/securities/:id", FindSingleSecurity);

router.put("/securities/:id", UpdateSecurity);

router.delete("/securities/:id", DeleteSecurity);

module.exports = router;
