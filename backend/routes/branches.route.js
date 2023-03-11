const express = require("express");
const { AddBranch, FindAllBranches, DeleteBranch, FindSingleBranch, UpdateBranch } = require("../controllers/branches.controller");
const router = express.Router();

router.post("/branches", AddBranch);

router.get("/branches", FindAllBranches);

router.get("/branches/:id", FindSingleBranch);

router.put("/branches/:id", UpdateBranch);

router.delete("/branches/:id", DeleteBranch);

module.exports = router;
