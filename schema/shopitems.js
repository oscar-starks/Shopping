const mongoose = require('mongoose');
const shopItemSchema = new mongoose.Schema({
    name: {
        type:String,
        required : true,
    },
    description: {
        type:String,
        required : true,
    },
    price:{
        type:Number,
        required: true,        
    },
    isInStock:{
        type:Boolean,
        required: true,
        default: true,
    }
},{timestamps:true});

const shopItemsCollection = mongoose.model('shopItems', shopItemSchema);

module.exports = {
    shopItemsCollection
};