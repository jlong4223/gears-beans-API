const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");
const { checkUserId, checkAuth } = require("../middleware/authentication");

router.get("/reviews", reviewsCtrl.showReviews);
router.get("/reviews/:id", reviewsCtrl.showOneReview);
router.get("/reviews/user/:createdBy", reviewsCtrl.showUserReviews);

router.use(require("../config/authentication"));
router.post("/reviews", checkAuth, reviewsCtrl.createReview);
router.put("/reviews/:id", checkUserId, reviewsCtrl.editReview);
router.patch("/reviews/:id", checkUserId, reviewsCtrl.editReview);
router.delete("/reviews/:id", checkUserId, reviewsCtrl.deleteReview);

module.exports = router;
