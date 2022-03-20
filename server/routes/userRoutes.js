const express = require('express');
const { registerUser, authUser } = require('../controllers/userController');

const router = express.Router()

router.route('/').post(registerUser)
router.route('/auth').post(authUser)

module.exports = router;