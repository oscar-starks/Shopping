const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopping');
const validators = require('../validators/shopping');
const middlewares = require('../middlewares/auth');



// router.post('/signup/',validators.newUserValidator, authController.registerUserController);
// router.post('/login/',validators.loginValidator, authController.loginController);
router.get('/alls/',shopController.getShopItemsController);
router.post('/create/', middlewares.verifyAdminMiddleware, validators.newItemValidator,shopController.createItemController);

// router.post();



module.exports = router;

