const api = require('./lib/api');
const Scraper = require('./lib/scraper');
const input = require('./lib/input');
const output = require('./lib/output');

input.HOME_LIST.forEach(home => {

    Promise.all([
        api.get(home, input.DESTINATION_X),
        api.get(home, input.DESTINATION_Y)
    ])
    .then(([resX, resY]) => {
        let travelTimeX = (new Scraper(resX.data)).getTravelTime();
        let travelTimeY = (new Scraper(resY.data)).getTravelTime();
        output.display(home, travelTimeX, travelTimeY);
    });

});
