const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

router.get("/reviews", reviewsCtrl.showReviews);
router.get("/reviews/:id", reviewsCtrl.showOneReview);
router.get("/reviews/user/:createdBy", reviewsCtrl.showUserReviews);
router.post("/reviews", reviewsCtrl.createReview);
router.put("/reviews/:id", reviewsCtrl.editReview);
router.patch("/reviews/:id", reviewsCtrl.editReview);
router.delete("/reviews/:id", reviewsCtrl.deleteReview);

module.exports = router;
