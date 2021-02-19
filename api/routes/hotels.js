const express = require("express");
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const HotelsController = require('../controllers/hotels');



// "/" route means not the actual root url from browser, but it is after the route from where it is receving the request
//in this case "/" means root of "/hotels" (see app.js) from where it is receving the request to serec.
router.get("/", authenticate, HotelsController.get_all_hotels);

//here "hotelId" is a variable for request param to store the id coming from the url after "/"
router.get("/:hotelId",authenticate, HotelsController.get_hotel);

router.post("/", authenticate, HotelsController.create_hotel);

router.patch("/:hotelId", authenticate, HotelsController.update_hotel);

router.delete("/:hotelId", authenticate, HotelsController.delete_hotel);

module.exports = router;