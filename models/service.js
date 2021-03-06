const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bikeServiceSchema = new Schema(
  {
    name: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("BikeService", bikeServiceSchema);
