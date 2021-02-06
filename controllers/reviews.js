const Review = require("../models/review");

module.exports = {
  showReviews,
  createReview,
};

async function showReviews(req, res) {
  const reviews = await Review.find({});
  res.json(reviews);
}

async function createReview(req, res) {
  try {
    await Review.create(req.body);
    showReviews();
  } catch (err) {
    res.json(err);
  }
}
