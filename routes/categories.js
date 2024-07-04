// /routes/categories.js
var express = require("express");
const categories_controller = require("../controllers/categoriesController");

var router = express.Router();

/* GET home page. */
router.get("/", categories_controller.categories_get);

router.get("/addCategory", categories_controller.add_category_get);

router.post("/addCategory", categories_controller.add_category_post);

router.get("/:id", categories_controller.showCategory);

router.get("/update/:id", categories_controller.updateCategory);

router.get("/delete/:id", categories_controller.deleteCategory);

module.exports = router;
