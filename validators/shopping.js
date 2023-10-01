const { check } = require('express-validator');

const newItemValidator  = [
    check('name', 'must provide a valid name'),
    check('description', 'length should be longer than 3 characters').isLength({ min: 3}),
    check('price', 'price must be provided').isInt(),
    check('isInStock', 'must be a boolean value').isBoolean(),
]

module.exports = {
    newItemValidator
}