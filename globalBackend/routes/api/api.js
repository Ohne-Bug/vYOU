var express = require('express');
var router = express.Router();

const ecoTipsRouter = require('./ecoTips/router');
const helbizScooterRouter = require('./helbizScooter/router');

router.use('/ecotips', ecoTipsRouter);
router.use('/helbizscooter', helbizScooterRouter);

router.get('/', function(req, res, next) {
    res.json({
        "availableRoutes": [
            '/ecotips/get'
            ]
    })
});

module.exports = router;
