const cheerio = require('cheerio');

class Scraper {
    constructor(html) {
        this.$ = cheerio.load(html);
    }
    getTravelTime() {
        let candidates = [];
        let $results = this.$('#results>.bk_result');
        if ($results.length === 0) {
            return 'Unkonwn Station Name'
        }
        $results.each((index, elem) => {
            let timeStr = this.$(elem).find('.data>dl.data_total-time>dd>b').text();
            let time = this.textToNumber(timeStr);
            candidates.push(time);
        });
        candidates.sort();
        return candidates[0];
    }
    textToNumber(text) {
        if (typeof text !== 'string') {
            return NaN;
        }
        let result = text.match(/((\d+)時間)?(\d+)分/),
            h, m;
        if (result[2]) {
            h = result[2] - 0;
        } else {
            h = 0;
        }
        m = result[3] - 0;
        return 60 * h + m;
    }
}

module.exports = Scraper;
