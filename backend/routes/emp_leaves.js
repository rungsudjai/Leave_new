const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const emp_leave = require('../models/emp_leave');



router.get('/',async (req, res) => {
    try {
        const Get_emp_leave = await emp_leave.find();
        res.json(Get_emp_leave);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

router.get('/edit',async (req, res) => {
    try {
        const {Fk_User} = req.body;
        const Get_emp_leave = await emp_leave.findOne({Fk_User : Fk_User});
        res.json(Get_emp_leave);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

router.post('/', async (req, res, next) => {
    try {
        // Create a new user document using req.body
        const new_leave = await emp_leave.create(req.body);

        // Send the newly created user as JSON response
        res.status(201).json(new_leave);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
})

module.exports = router;