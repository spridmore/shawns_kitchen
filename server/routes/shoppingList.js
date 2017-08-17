const express = require('express');
const router = express.Router();

const shoppingList =  require("../controllers/shoppingList-controller.js")

router.post('/', shoppingList.create);
router.get('/', shoppingList.index);
router.get('/:id', shoppingList.show);
router.put('/:id', shoppingList.update);
router.delete('/:id', shoppingList.delete);

module.exports = router;