var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./IT/personal_info-for-edit');
});

module.exports = router;