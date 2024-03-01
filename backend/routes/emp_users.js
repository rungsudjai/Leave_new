const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const emp_user = require('../models/emp_user');

router.get('/',async (req, res) => {
    try {
        const Get_emp_user = await emp_user.find();
        res.json(Get_emp_user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

router.post('/', async (req, res, next) => {
    try {
        // Create a new user document using req.body
        const new_emp = await emp_user.create(req.body);

        // Send the newly created user as JSON response
        res.status(201).json(new_emp);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})




module.exports = router;