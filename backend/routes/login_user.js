const jwt = require('jsonwebtoken')
const User = require('../models/emp_user')
const express = require('express');
const router = express.Router();
const verifyToken = require('./auth')

const payload = {}
const secretKey = 'your_secret_key'
jwt.sign(payload, secretKey, { expiresIn: 60 * 60 });

router.post('/', async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ Email: email });
        if (user != null) {
            if (user.Password == password) {
                const payload = { id: user._id }
                const token = jwt.sign(payload, secretKey, { expiresIn: '1hr' })
                res.json({ user, token })
            }else{
                res.status(500).json({ message: 'รหัสผ่านผิด' });
            }

        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'NOOOOOOOOOOOOOOOOOOO' });
    }
})

router.post('/auth', verifyToken, (req, res) => {
    try {
        res.json({ message: "ok", user: req.user })
    } catch (error) {
        console.error(error);
    }

})


module.exports = router;