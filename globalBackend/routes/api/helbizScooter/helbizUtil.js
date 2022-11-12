const authConfig = require('./auth.json');

let token = null;

module.exports.init = function() {
    const updateFunc = async function () {
        fetch('https://api.helbiz.com/prod/user/authenticate', {
            method: 'POST',
            headers: {
                'User-Agent': 'Helbiz (com.helbiz.android)',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: authConfig.email,
                password: authConfig.password
            })
        }).then(res => res.json())
            .then(json => token = json.token)
            .then(() => console.log('Updated helbiz information'));
    }();
    setInterval(async function () {
        updateFunc();
    }, 60 * 10 * 1000);

}

module.exports.getScooters = async function(lat, long) {
    const northWest = (lat-0.01)+'%2C'+(long+0.01); //FIXME: does not work for greenwich
    const southEast = (lat+0.01)+'%2C'+(long-0.01); //FIXME: does not work for greenwich
    let resp = await fetch('https://api.helbiz.com/prod/scooters?northWest=' + northWest + '&southEast=' + southEast, {
        method: 'GET',
        headers: {
            'User-Agent': 'Helbiz (com.helbiz.android)',
            'Content-Type': 'application/json',
            'X-access-token': token
        }
    }).then(res => res.json());
    return resp;
    //According to doc:
    /*
        [
            {
                "id": "5bf7d74930212164763155af",
                "lat": 45.46080583333333,
                "lon": 9.202304333333334,
                "batteryLevelInMiles": 8.1,
                "pricing": {
                    "hourly": 15
                },
                "geofence": "milano1"
            },
            {
                "id": "5bf7db6030212164763155c3",
                "lat": 45.4560585,
                "lon": 9.195604333333334,
                "batteryLevelInMiles": 15,
                "pricing": {
                    "hourly": 15
                },
                "geofence": "milano1"
            },
            ...
        ]
     */
}
