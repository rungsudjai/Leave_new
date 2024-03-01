


module.exports = (req, res) => {
    if(!!localStorage.getItem('token')){
        return res.redirect('/login')
    }

}