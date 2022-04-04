const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dishSchema = new Schema ({
    dishName: {type:String, required: true},
    // image: {type:String},
    location: {type:String, required: true},
    cost: {type:Number, default: 0}, 
    category: {type:String}
    // description: {type:String}
    // ingredients: {type:[String]}

}, {timestamps:true});


const Dish = mongoose.model('dish', dishSchema);

module.exports = Dish;





