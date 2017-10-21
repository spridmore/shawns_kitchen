const express = require('express');
const router = express.Router();

const recipes =  require("../controllers/recipe-controller.js")

router.get('/', recipes.index);
router.post('/', recipes.create);
router.get('/:id', recipes.show);
router.put('/:id', recipes.update);
router.delete('/:id', recipes.destroy);

module.exports = router;
