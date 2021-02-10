const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.get("/reviews", reviewsCtrl.showReviews);
router.get("/reviews/:id", reviewsCtrl.showOneReview);
router.post("/reviews", reviewsCtrl.createReview);
router.put("/reviews/:id", reviewsCtrl.editReview);
router.delete("/reviews/:id", reviewsCtrl.deleteReview);

module.exports = router;
