const { default: axios } = require("axios");
const { redirect } = require("react-router-dom");

function isNullOrEmpty(str) {
    return str == null || str.trim() === '';
}

function CheckLogin() {
    if (!!localStorage.getItem('token') == false) {
        window.location.replace('/login')
    }
}

function CheckLogout() {
    if (!!localStorage.getItem('token') == true) {
        return true
    }

    return false
}

function CheckAuthHr() {
    const dep = JSON.parse(localStorage.getItem('user'))
    if(dep.Department != "HR"){
        window.history.back()
    }

}

module.exports = {isNullOrEmpty, CheckLogin, CheckLogout, CheckAuthHr};