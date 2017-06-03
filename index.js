const input = require('./lib/input');
const output = require('./lib/output');
const service = require('./lib/service/service');

function task(index) {

    let home = input.HOME_LIST[index];

    return Promise.resolve().then(() => {
        return service.normalizeStationName(home);
    }).then(normalizedHome => {
        return Promise.all([
            service.getTravelTime(normalizedHome, input.DESTINATION_X),
            service.getTravelTime(normalizedHome, input.DESTINATION_Y)
        ])
    }).then(([timeX, timeY]) => {
        output.displayProgress(index+1, input.HOME_LIST.length, home);
        return output.plot(home, timeX, timeY);
    }).then(() => {
        return ++index;
    }).catch(err => {
        console.log(err);
    });

}

input.HOME_LIST.reduce((prev, curr) => {
    return prev.then(task);
}, Promise.resolve(0));
