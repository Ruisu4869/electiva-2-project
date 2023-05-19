const express = require("express");
const CategoryController = require("../controllers/category");
const middleware_authentication = require("../middlewares/authenticated");
const multiparty = require("connect-multiparty");

const md_upload = multiparty({ uploadDir: "./uploads/categoies" });
const api = express.Router();

api.post(
    "/new",
    [middleware_authentication.asureAuth, md_upload],
    CategoryController.createCategory
);
api.get("/", CategoryController.getCategories);

module.exports = api;