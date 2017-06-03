const url = require('url');
const axios = require('axios');

function urlTemplate(word) {
    return url.format({
        protocol: 'http:',
        host: 'www.jorudan.co.jp',
        pathname: '/ekiin/cgi-bin/edicc.cgi',
        query: {
            q: word,
            k: 0,
            n: 8
        }
    });
}

function get(word) {
    let requestUrl = urlTemplate(word);
    return axios.get(requestUrl).then(res => {
        let dataStr = res.data.replace(/'/g, '"').replace(/,\s*\];/, ']');
        let data = JSON.parse(dataStr);
        return data.map(element => element[0]);
    });
}

module.exports = {
    get, urlTemplate
};
