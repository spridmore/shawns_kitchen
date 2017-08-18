const express = require('express');
const router = express.Router();

const searchHistory =  require("../controllers/searchHistory-controller.js")

router.get('/', searchHistory.index);
router.post('/', searchHistory.create);
router.get('/:id', searchHistory.show);
router.put('/:id', searchHistory.update);
router.delete('/:id', searchHistory.destroy);

module.exports = router;
