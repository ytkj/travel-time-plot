const autoCompleteApi = require('../api/auto-complete-api');
const travelTimeApi = require('../api/travel-time-api');
const Scraper = require('./scraper');

function normalizeStationName(rawName) {
    return autoCompleteApi.get(rawName).then(candidates => {
        let name;
        if (!candidates.length || candidates.length === 0) {
            name = rawName;
        } else if (candidates.length === 1) {
            name = candidates[0];
        } else {
            let found = candidates.find(element => {
                return /（東京）/.test(element);
            });
            if (found) {
                name = found;
            } else {
                name = rawName;
            }
        }
        return name;
    });
}

function getTravelTime(from, to) {
    return travelTimeApi.get(from, to).then(res => {
        if (res.status !== 200) {
            return 'Network error';
        }
        return (new Scraper(res.data)).getTravelTime();
    });
}

module.exports = {
    normalizeStationName, getTravelTime
}
