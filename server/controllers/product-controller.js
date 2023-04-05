const productService = require('../service/product-service');
const {validationResult} = require('express-validator');
const ApiError = require('../exceptions/api-error');

class ProductController {
    async create(req, res, next) {
        try {
            const pr = req.body.product;
            const {_id, description, price, name} = req.body.product;

            const product = await productService.create(name, price, description);

            return res.json(product);
        } catch (e) {
            next(e);
        }
    }

    async update(req, res, next) {
        try {
            const {_id, name, price, description} = req.body;

            const product = await productService.update(_id, name, price, description);

            return res.json(product);
        } catch (e) {
            next(e);
        }
    }

    async delete(req, res, next) {
        try {
            const id = req.params.id;

            const product = await productService.delete(id);

            return res.json(product);
        } catch (e) {
            next(e);
        }
    }

    async getProducts(req, res, next) {
        try {
            const products = await productService.getProducts();

            return res.json(products);
        } catch (e) {
            next(e);
        }
    }

    async getProductById(req, res, next) {
        try {
            const id = req.body._id;
            const product = await productService.getProductById();

            return res.json(product);
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new ProductController();