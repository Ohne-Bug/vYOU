var express = require('express');
var router = express.Router();


router.get('/get', function(req, res, next) {
    const lat = req.query.lat;
    const long = req.query.long;
    if (lat && long) {
        helbizUtil.getScooters(lat, long).then((data) => {
            res.json({
                "helbizScooter": data
            })
        });
    } else{
        res.json({
            "status": "error",
            "message": "lat and long are required"
        })
    }
});

module.exports = router;
