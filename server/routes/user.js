const express = require('express');
const router = express.Router();

const userController =  require("../controllers/user-controller.js")
const authController =  require("../controllers/auth-controller.js")

router.post('/login', authController.login);
router.post('/register', authController.register);

router.get('/', userController.index);
router.get('/:id', authController.verify, userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.destroy);

module.exports = router;
