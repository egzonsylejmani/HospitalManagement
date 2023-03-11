const express = require("express");
const { AddContent, UpdateContent, DeleteContent, FindAllContent } = require("../controllers/homepage.controller");
const router = express.Router();

router.get("/homePageContent", FindAllContent);

router.post("/homePageContent", AddContent);

router.put("/homePageContent", UpdateContent);

router.delete("/homePageContent/:id", DeleteContent);

module.exports = router;
