const express = require("express");
const { Addmedicine, FindAllMedicines, DeleteMedicine, FindSingleMedicine, UpdateMedicine } = require("../controllers/medicines.controller");
const router = express.Router();

router.post("/medicines", Addmedicine);

router.get("/medicines", FindAllMedicines);

router.get("/medicines/:id", FindSingleMedicine);

router.put("/medicines/:id", UpdateMedicine);

router.delete("/medicines/:id", DeleteMedicine);

module.exports = router;
