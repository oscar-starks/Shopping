const path = require('path');
require('dotenv').config({path: path.join(__dirname, '..', '.env')});
const schema = require('../schema/shopitems')
const {validationResult } = require('express-validator');

const getShopItemsController = async (req, res) => {
    const tasks = await schema.shopItemsCollection.find();
    res.json({"message":"data fetched!", "data":tasks});
}

const createItemController = async (req, res) =>{
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const newItem = await schema.shopItemsCollection.create({
        name: req.body.name,
        description: req.body.description,
        price:req.body.price,
        isInStock:req.body.isInStock
    });

    res.json({"message":"new item created", "data":newItem})
}

const getSingleItemController = async (req, res) => {
    const itemID = req.params.id;
    const item = await schema.shopItemsCollection.findById(itemID)
    .then((item) => {
        if (item) {res.json({"message":'Item retrieved successfully', "data":item});}
        else {res.status(404).json({"message":"Item not found"});}
          
      })
      .catch((error) => {
        res.status(400).json({"message":'No matching item found'});
      });

}

const editSingleItemController = async (req, res) => {
    const itemID = req.params.id;
    const item = await schema.shopItemsCollection.findById(itemID)

    .then((item) =>{
        item.isInStock = req.body.isInStock
        item.save();
        res.json({"message":"item updated"});
    })
    .catch((err) =>{
        res.status(404).json({"message":"item not found"});
    });
 
}

const deleteSingleItem = async (req, res) => {
    const itemID = req.params.id;
    const item = await schema.shopItemsCollection.findByIdAndDelete(itemID)

    .then((item) => {
        if (item) {
          res.json({"message":'Item deleted successfully'});
        } else {
          res.status(400).json({"message":'No matching item found'});

        }
      })
      .catch((error) => {
        res.status(400).json({'message':"unexpected error, please try again"});
      });
}

module.exports = {
    getShopItemsController, createItemController, editSingleItemController, getSingleItemController, deleteSingleItem
}