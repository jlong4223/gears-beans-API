const productsRouter = require("./products");
const servicesRouter = require("./services");
const reviewsRouter = require("./reviews");
const usersRouter = require("./user");

const allRoutes = [productsRouter, servicesRouter, reviewsRouter, usersRouter];

module.exports = allRoutes;
