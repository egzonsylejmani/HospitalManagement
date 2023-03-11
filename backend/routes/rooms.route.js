const express = require("express");
const { AddRoom, FindAllRooms, DeleteRoom, FindSingleRoom, UpdateRoom } = require("../controllers/Rooms.controller");
const router = express.Router();

router.post("/rooms", AddRoom);

router.get("/rooms", FindAllRooms);

router.get("/rooms/:id", FindSingleRoom);

router.put("/rooms/:id", UpdateRoom);

router.delete("/rooms/:id", DeleteRoom);

module.exports = router;
