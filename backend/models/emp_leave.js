const mongoose = require('mongoose');

const emp_leave = new mongoose.Schema({
    emp_name : String,
    fk_user : String,
    emp_department : String,
    type_leave : String,
    Reason : String,
    startdate : Date,
    enddate : Date,
    create_at : {type:Date, default: Date.now}
})

const emp_leave_model = mongoose.model('emp_leave', emp_leave)
module.exports = emp_leave_model;