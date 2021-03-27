const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let ProductSchema = new Schema({product_name: {type: String, required: true, max: 100},	
    Price: {type: Number, required: true}});
    // Exporting the model
module.exports = mongoose.model('Product', ProductSchema);