const express = require('express');
const router = express.Router();

const shoppingList =  require("../controllers/shoppingList-controller.js")

router.get('/', shoppingList.index);
router.post('/', shoppingList.create);
router.get('/:id', shoppingList.show);
router.put('/:id', shoppingList.update);
router.delete('/:id', shoppingList.destroy);

module.exports = router;
