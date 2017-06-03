const input = require('./input');
const fs = require('fs');

const OUTPUT_FILE_PREFIX = 'plot-';
const OUTPUT_FILE_SUFFIX = '.csv';

function display(home, x, y) {
    let log = `
Home: ${home}
Travel Time to ${input.DESTINATION_X}: ${x}分
Travel Time to ${input.DESTINATION_Y}: ${y}分
`;
    console.log(log);
}

function plot(home, x, y, id) {
    let log = [
        home, x, y
    ].join(',') + '\n';
    let fileid = id || 'default';
    let filename = OUTPUT_FILE_PREFIX + fileid + OUTPUT_FILE_SUFFIX;
    return appendFile(filename, log);
}

function displayProgress(done, all, label) {
    let progress = done / all;
    let percentage = Math.round(progress * 10000) / 100;
    let log = `${percentage}% done. current: ${label}`;
    console.log(log);
}

function appendFile(filename, text) {
    return new Promise((resolve, reject) => {
        fs.appendFile(filename, text, 'utf8', err => {
            if (err) reject(err);
            resolve();
        });
    });
}

module.exports = {
    display, plot, displayProgress, appendFile
};
