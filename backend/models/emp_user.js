const mongoose = require('mongoose');

const emp_user = new mongoose.Schema({
    Email : String,
    Password : String,
    Department : String,
    NationalID : String,
    MobilePhone : String,
    Title : String,
    FirstName : String,
    LastName : String,
    ModifiedDate : {type:Date, default: Date.now},
    CreateDate : {type:Date, default: Date.now}
})

const emp_user_model = mongoose.model('emp_user', emp_user)
module.exports = emp_user_model;