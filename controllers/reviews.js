const Review = require("../models/review");

module.exports = {
  showReviews,
  createReview,
  showOneReview,
};

async function showReviews(req, res) {
  const reviews = await Review.find({});
  res.json(reviews);
}

async function showOneReview(req, res) {
  try {
    const oneReview = await Review.findById(req.params.id);
    res.json(oneReview);
  } catch (err) {
    res.json(err);
  }
}

async function createReview(req, res) {
  try {
    await Review.create(req.body);
    showReviews();
  } catch (err) {
    res.json(err);
  }
}
