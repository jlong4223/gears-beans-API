const Review = require("../models/review");

module.exports = {
  showReviews,
  createReview,
  showOneReview,
  deleteReview,
  editReview,
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
    showReviews(req, res);
  } catch (err) {
    res.json(err);
  }
}

async function deleteReview(req, res) {
  try {
    const deleteIt = await Review.findByIdAndDelete(req.params.id);
    res.json(deleteIt);
  } catch (err) {
    res.json(err);
  }
}

async function editReview(req, res) {
  try {
    const updateReview = await Review.findByIdAndUpdate(
      req.params.id,
      req.body,
    );
    res.json(updateReview);
  } catch (err) {
    res.json(err);
  }
}
