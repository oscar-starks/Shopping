const { check } = require('express-validator');

allowedChoices =[
    'admin',
    'user'
]

const newUserValidator  = [
    check('email', 'must provide a valid email').isEmail().isLength({ min: 3}),
    check('fullName', 'length should be longer than 3 characters').isLength({ min: 3}),
    check('username', 'length should be longer than 3 characters').isLength({ min: 3}),
    check('role', 'role should be provided').isIn(allowedChoices)
    .withMessage(`Value must be one of: ${allowedChoices.join(', ')}`),

    check('password', "must provide a valid password ").isLength({ min: 8}),
]

const loginValidator  = [
    check('email', 'must provide a valid email').isEmail(),
    check('password', "must provide a password"),
]


module.exports = {
    newUserValidator, loginValidator
}