const express = require('express');
const router = express.Router();

const reviews =  require("../controllers/reviews-controller.js")

router.get('/', reviews.index);
router.post('/', reviews.create);
router.get('/:id', reviews.show);
router.put('/:id', reviews.update);
router.delete('/:id', reviews.destroy);

module.exports = router;
