var express = require('express');
var router = express.Router();

const bikeMiUtil = require('./bikeMiUtil');

router.get('/get', function(req, res, next) {
    res.json(bikeMiUtil.get());
});

module.exports = router;
