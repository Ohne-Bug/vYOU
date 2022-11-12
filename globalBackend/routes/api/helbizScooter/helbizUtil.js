const authConfig = require('./auth.json');

let token = null;

module.exports.init = function() {
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
            ...
        ]
     */
}
