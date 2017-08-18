const express = require('express');
const router = express.Router();

const reviews =  require("../controllers/reviews-controller.js")

router.post('/', reviews.create);
router.get('/', reviews.index);
router.get('/:id', reviews.show);
router.put('/:id', reviews.update);
router.delete('/:id', reviews.delete);

module.exports = router;