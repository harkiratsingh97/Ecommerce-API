const Product = require("../models/product");

module.exports.create = async function (req, res) {
	try {
		let newProduct = await Product.create(req.body);
		if (newProduct) {
			return res.status(200).json({ data: { product: newProduct } });
		} else {
			return res
				.status(400)
				.json({ message: "Your request cannot be processed" });
		}
	} catch (err) {
		return res.status(500).json({ message: "Internal Server error" });
	}
};

module.exports.getAllProducts = async function (req, res) {
	try {
		let products = await Product.find();
		if (products) {
			return res.status(200).json({ data: { products: products } });
		} else {
			return res
				.status(400)
				.json({ message: "Your request cannot be processed" });
		}
	} catch (err) {
		return res.status(500).json({ message: "Internal Server error" });
	}
};

module.exports.deleteProduct = async function (req, res) {
	try {
		let productDeleted = await Product.findByIdAndDelete(req.params.id);
		if (productDeleted) {
			return res.status(200).json({ message: "product deleted" });
		} else {
			return res
				.status(400)
				.json({ message: "Your request cannot be processed" });
		}
	} catch (err) {
		return res.status(500).json({ message: "Internal Server error" });
	}
};

module.exports.updateQuantity = async function (req, res) {
	try {
		let updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
			$inc: { quantity: req.query.number },
		});
		if (updatedProduct) {
			updatedProduct = await Product.findById(req.params.id);
			return res.status(200).json({
				data: { product: updatedProduct },
				message: "updated successfully",
			});
		} else {
			return res
				.status(400)
				.json({ message: "Your request cannot be processed" });
		}
	} catch (err) {
		return res.status(500).json({ message: "Internal Server error" });
	}
};
