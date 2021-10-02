const productsRouter = require("./products");
const servicesRouter = require("./services");
const reviewsRouter = require("./reviews");

const allRoutes = [productsRouter, servicesRouter, reviewsRouter];

module.exports = allRoutes;
