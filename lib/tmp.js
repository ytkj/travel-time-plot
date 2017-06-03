const axios = require('axios');
const service = require('./service/service');

service.getTravelTime('新大塚', '両国').then(time => {
    console.log(time);
})

/*
api.get('大塚').then(res => {
    console.log(res);
}).catch(err => {
    console.log(err);
});
*/

function pTemplate(p) {
    return `http://www.ekidata.jp/api/p/${p}.json`;
}

function lTemplate(l) {
    return `http://www.ekidata.jp/api/l/${l}.json`;
}

function jsonp(url) {
    return new Promise((resolve, reject) => {
        let xml = {};
        xml.onload = resolve;
        axios.get(url).then(res => {
            eval(res.data);
        });
    })
}
/*
jsonp(pTemplate(13)).then(data => {
    data.line.forEach(line => {
        console.log(line.line_cd,  line.line_name);
    });
});
*/
/*
jsonp(pTemplate(13)).then(data => {
    data.line.forEach(line => {
        let l = line.line_cd;
        jsonp(lTemplate(l)).then(ddata => {
            ddata.station_l.forEach(station => {
                let name = station.station_name;
                let out = [
                    '\'',
                    name,
                    '\'',
                    ','
                ].join('');
                console.log(out);
            });
        });
    });
});
*/
