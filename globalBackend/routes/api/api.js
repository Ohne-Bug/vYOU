var express = require('express');
var router = express.Router();

const ecoTipsRouter = require('./ecoTips/router');

router.use('/ecotips', ecoTipsRouter);

router.get('/', function(req, res, next) {
    res.json({
        "availableRoutes": [
            '/ecotips/get'
            ]
    })
});

module.exports = router;
