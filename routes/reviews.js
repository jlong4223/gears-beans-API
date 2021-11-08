const express = require("express");
const router = express.Router();
const reviewsCtrl = require("../controllers/reviews");

// TODO protect routes based on userID
// compare the userID making the request to the userID in the review
// if they match, allow the request to go through
// use a middleware to check if the userID matches the userID in the review by decoding the token

router.get("/reviews", reviewsCtrl.showReviews);
router.get("/reviews/:id", reviewsCtrl.showOneReview);
router.get("/reviews/user/:createdBy", reviewsCtrl.showUserReviews);

router.use(require("../config/authentication"));
router.post("/reviews", checkAuth, reviewsCtrl.createReview);

// TODO these routes need to have matching userids in the review based on the one sent in token
router.put("/reviews/:id", checkAuth, reviewsCtrl.editReview);
router.patch("/reviews/:id", checkAuth, reviewsCtrl.editReview);
router.delete("/reviews/:id", checkAuth, reviewsCtrl.deleteReview);

// TODO move this to middleware dir; there will be more
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
