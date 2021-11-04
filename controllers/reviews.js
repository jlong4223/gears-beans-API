const Review = require("../models/review");

module.exports = {
  showReviews,
  createReview,
  showOneReview,
  deleteReview,
  editReview,
  showUserReviews,
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

async function showUserReviews(req, res) {
  const { createdBy } = req.params;
  try {
    const userReviews = await Review.find({ createdBy });
    res.json(userReviews);
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
    await Review.findByIdAndUpdate(req.params.id, req.body);

    const updatedReviews = await Review.findById(req.params.id);

    res.json(updatedReviews);
  } catch (err) {
    res.json(err);
  }
}
