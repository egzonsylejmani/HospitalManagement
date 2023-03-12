const express = require("express");
const { AddFaq, UpdateFaq, DeleteFaq, FindAllFaq } = require("../controllers/faq.controller");
const router = express.Router();

router.get("/faq", FindAllFaq);

router.post("/faq", AddFaq);

router.put("/faq/:id", UpdateFaq);

router.delete("/faq/:id", DeleteFaq);

module.exports = router;
