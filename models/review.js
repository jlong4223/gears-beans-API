const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reviewSchema = new Schema(
  {
    name: {
      type: String,
    },
    stars: {
      type: Number,
    },
    message: {
      type: String,
    },
    product: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Review", reviewSchema);
