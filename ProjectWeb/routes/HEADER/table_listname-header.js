var express = require('express');
var router = express.Router();
const regis = require('../../models/regisdb')

/* GET home page. */
router.get('/', function(req, res, next) {
    regis.getAllRegis(function(err, regisdb) {
        if (err) throw err
        res.render('./HEADER/table_list-header', { regisdb: regisdb });
    })

});



module.exports = router;