const {Schema, model} = require('mongoose');

const ProductSchema = new Schema({
    name: {type: String, unique: true, required: true},
    price: {type: Schema.Types.Decimal128, required: true},
    description: {type: String, required: true}
});

module.exports = model('Product', ProductSchema);
