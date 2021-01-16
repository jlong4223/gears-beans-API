const BikeService = require("../models/service");

module.exports = {
  showServices,
  createService,
  showOneService,
  deleteService,
};

// TODO set up other crud functions

async function showServices(req, res) {
  const services = await BikeService.find({});
  console.log(services);
  res.json(services);
}

async function showOneService(req, res) {
  try {
    const oneService = await BikeService.find({ _id: req.params.id });
    res.json(oneService);
  } catch (err) {
    res.json(err);
  }
}

async function createService(req, res) {
  try {
    await BikeService.create(req.body);
    showServices(req, res);
  } catch (err) {
    res.json({ err });
  }
}

// TODO change to findByIdAndDelete? this does work though
async function deleteService(req, res) {
  try {
    const deleteIt = await BikeService.findByIdAndRemove(req.params.id);
    res.json(deleteIt);
  } catch (err) {
    res.json(err);
  }
}

async function editService(req, res) {
  try {
    const updateService = await BikeService.findByIdAndUpdate;
  } catch (err) {
    res.json(err);
  }
}
