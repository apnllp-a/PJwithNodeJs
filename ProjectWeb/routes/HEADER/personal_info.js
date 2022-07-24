var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./HEADER/personal_info-header');
});

module.exports = router;