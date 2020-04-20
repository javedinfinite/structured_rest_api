const express = require("express");
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const HotelsController = require('../controllers/hotels');




router.get("/", authenticate, HotelsController.get_all_hotels);

router.get("/:hotelId",authenticate, HotelsController.get_hotel);

router.post("/", authenticate, HotelsController.create_hotel);

router.patch("/:hotelId", authenticate, HotelsController.update_hotel);

router.delete("/:hotelId", authenticate, HotelsController.delete_hotel);

module.exports = router;