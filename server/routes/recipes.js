const express = require('express');
const router = express.Router();

const recipes =  require("../controllers/recipes-controller.js")


router.post('/', recipes.create);
router.get('/', recipes.index);
router.get('/:id', recipes.show);
router.put('/:id', recipes.update);
router.delete('/:id', recipes.delete);

module.exports = router;