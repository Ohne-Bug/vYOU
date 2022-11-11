var express = require('express');
var router = express.Router();

const ecoTipsUtil = require('./ecoTipsUtil');

router.get('/get', function(req, res, next) {
    res.json({
        "ecoTip": ecoTipsUtil.get()
    })
});

module.exports = router;
