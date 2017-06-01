const url = require('url');
const axios = require('axios');

const DEPARTURE_TIME = {
    Dhh: 7,
    Dm1: 0,
    Dm2: 0
};

function urlTemplate(from, to, startAt) {
    return url.format({
        protocol: 'http:',
        host: 'www.jorudan.co.jp',
        pathname: '/norikae/cgi/nori.cgi',
        query: {
            eki1: from,
            eki2: to,
            rf: 'top',
            eok1: '',
            eok2: '',
            pg: '0',
            Cmap1: '',
            Dym: '201706',
            Ddd: '1',
            Dhh: startAt.Dhh,
            Dmn1: startAt.Dm1,
            Dmn2: startAt.Dm2,
            Cway: '0',
            Cfp: '1',
            Czu: '2',
            'S.x': '49',
            'S.y': '10',
            S: '検索',
            Csg: '1'
        }
    });
}

function get(from, to) {
    let requestUrl = urlTemplate(from, to, DEPARTURE_TIME);
    return axios.get(requestUrl);
}

module.exports = {
    get, urlTemplate
}
