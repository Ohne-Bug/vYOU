var express = require('express');
var router = express.Router();

const ecoTipsRouter = require('./ecoTips/router');
const helbizScooterRouter = require('./helbizScooter/router');
const bikeMiRouter = require('./bikeMi/router');

router.use('/ecotips', ecoTipsRouter);
router.use('/helbizscooter', helbizScooterRouter);
router.use('/bikemi', bikeMiRouter);

router.get('/', function(req, res, next) {
    res.json({
        "availableRoutes": [
            '/ecotips/get'
            ]
    })
});

module.exports = router;
