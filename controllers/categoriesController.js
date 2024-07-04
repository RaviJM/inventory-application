// controllers/categoriesController.js
const categories = require("../models/categories");

exports.categories_get = async function (req, res, next) {
  try {
    const categoriesList = await categories.find().exec();

    res.render("categories", {
      title: "Categories",
      categoriesList: categoriesList,
    });
  } catch (err) {
    next(err);
  }
};

exports.add_category_get = async function (req, res, next) {
  try {
    res.render("add_category", { title: "Add Category" });
  } catch (err) {
    next(err);
  }
};

// adds as well as updates category
exports.add_category_post = async function (req, res, next) {
  const nameValue = req.body.name;
  const descriptionValue = req.body.description;

  try {
    const createOrUpdate = req.body.createOrUpdate;

    if (createOrUpdate === "Add Category") {
      const newCategory = new categories({
        name: nameValue,
        description: descriptionValue,
      });

      await newCategory.save();

      res.redirect("/");
    } else {
      let newCategory = await categories.findById(req.body.categoryToUpdateId);
      console.log(createOrUpdate);
      newCategory.name = nameValue;
      newCategory.description = descriptionValue;

      await newCategory.save();

      res.redirect("/");
    }
  } catch (err) {
    next(err);
  }
};

exports.showCategory = async function (req, res, next) {
  try {
    categoryToShow = await categories.findById(req.params.id).exec();

    res.render("category", { categoryToShow: categoryToShow });
  } catch (err) {
    next(err);
  }
};

exports.updateCategory = async function (req, res, next) {
  try {
    categoryToUpdate = await categories.findById(req.params.id).exec();

    res.render("add_category", {
      title: "Update Category",
      categoryToUpdate: categoryToUpdate,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteCategory = async function (req, res, next) {
  try {
    await categories.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (err) {
    next(err);
  }
};
