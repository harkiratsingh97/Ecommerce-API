const express = require("express");
const router = express.Router();

const productController = require("../controller/product");

router.post("/create", productController.create);
router.get("/", productController.getAllProducts);
router.delete("/:id", productController.deleteProduct);
router.post("/:id/update_quantity", productController.updateQuantity);
module.exports = router;
