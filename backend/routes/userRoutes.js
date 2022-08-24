const express = require('express')
const router = express.Router()
const {
    registerUser,
    loginUser,
    getMe
} = require('../controllers/userController')
const {protect} = require('../middleware/authMiddleware')
//adding a user
router.post('/', registerUser)
//auth user
router.post('/login', loginUser)
//user data
router.get('/me', protect, getMe)

module.exports = router