const input = require('./input');

function display(home, x, y) {
    let log = `
Home: ${home}
Travel Time to ${input.DESTINATION_X}: ${x}分
Travel Time to ${input.DESTINATION_Y}: ${y}分
`;
    console.log(log);
}

function plot(home, x, y) {
    let log = [
        home, x, y
    ].join(',');
    console.log(log);
}

module.exports = {
    display, plot
};
