const ProductModel = require('../models/product-model');
const ApiError = require('../exceptions/api-error');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('./mail-service');
const UserDto = require('../dtos/user-dto');
const tokenService = require('./token-service');

class ProductService {
    async create(name, price, description) {
        const candidate = await ProductModel.findOne({name});

        if (candidate) {
            throw ApiError.BadRequest('Такой продукт уже существует');
        }

        const product = await ProductModel.create({
            name,
            price,
            description
        });

        return {
            product
        };
    }

    async update(id, name, price, description) {
        const product = await ProductModel.findById(id);

        product.name = name;
        product.price = price;
        product.description = description;

        product.save();

        return {
            product
        };
    }

    async delete(id) {
        const prod = await ProductModel.deleteOne({_id: id});

        return prod;
    }

    async getProducts() {
        const products = await ProductModel.find();

        return products;
    }

    async getProductById(id) {
        const product = await ProductModel.findById(id);

        return product;
    }
}