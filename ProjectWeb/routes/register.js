var express = require('express');
var router = express.Router();
const regis = require('../models/regisdb')
    /* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./Common/register');
});
router.post('/add', function(req, res, next) {
    data = new regis({
        username: req.body.username,
        password: req.body.password,
        confirm_password: req.body.confirm_password,
        name: req.body.name,
        department: req.body.department
    })
    regis.createRegis(data, function(err, callback) {
        if (err) console.log(err);
        res.redirect("/")
    });
});

module.exports = router;