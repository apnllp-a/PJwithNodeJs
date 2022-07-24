var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./HEADER/table_documents-confirm');
});

module.exports = router;