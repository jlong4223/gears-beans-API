const BikeService = require("../models/service");

module.exports = {
  showServices,
  createService,
};

async function showServices(req, res) {
  const services = await BikeService.find({});
  console.log(services);
  res.json(services);
}

async function createService(req, res) {
  try {
    await BikeService.create(req.body);
    showServices(req, res);
  } catch (err) {
    res.json({ err });
  }
}
