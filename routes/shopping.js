const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopping');
const validators = require('../validators/shopping');
const middlewares = require('../middlewares/auth');


router.get('/all/',shopController.getShopItemsController);
router.post('/create/', middlewares.verifyAdminMiddleware, validators.newItemValidator,shopController.createItemController);
router.get('/single/:id/', shopController.getSingleItemController);
router.put('/edit/:id/', middlewares.verifyAdminMiddleware, validators.editItemValidator,shopController.editSingleItemController);


module.exports = router;

