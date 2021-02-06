const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.get("/reviews", reviewsCtrl.showReviews);
router.post("/reviews", reviewsCtrl.createReview);

module.exports = router;
