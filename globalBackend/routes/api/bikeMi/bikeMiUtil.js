let stationInformation = {};
let stationStatus = {};
let relevantInformation = [];

module.exports.init = function () {
    const updateFunc = async function () {
        let jsonInfo = await fetch('https://gbfs.urbansharing.com/bikemi.com/station_information.json');
        jsonInfo = await jsonInfo.json();
        stationInformation = jsonInfo.data.stations;
        let jsonStatus = await fetch('https://gbfs.urbansharing.com/bikemi.com/station_status.json')
        jsonStatus = await jsonStatus.json()
        stationStatus = jsonStatus.data.stations;
        stationInformation.forEach(station => {
            let obj = {};
            obj.name = station.name;
            obj.address = station.address;
            obj.lat = station.lat;
            obj.lon = station.lon;
            obj.capacity = station.capacity;
            obj.bikesAvailable = stationStatus.find(s => s.station_id === station.station_id).num_bikes_available;
            relevantInformation.push(obj);
        });
        console.log("Updated bikeMi information");
    }();
    setInterval(async function () {
        updateFunc();
    }, 60 * 10 * 1000);
}

module.exports.get = function () {
    return relevantInformation;
}
