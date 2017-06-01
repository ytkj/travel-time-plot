const expect = require('chai').expect;
const testdata = require('./testdata/html');

const Scraper = require('../lib/scraper');

describe('scraper.js', () => {

    const scraper = new Scraper(testdata);

    describe('Scraper#getTravelTime()', () => {

        it('travel time should be returned', () => {
            expect(scraper.getTravelTime()).to.equals(40);
        });
    });

    describe('Scraper#textToNumber()', () => {

        it('m分 should become m', () => {
            expect(scraper.textToNumber('1分')).to.equals(1);
        });

        it('mm分 should become mm', () => {
            expect(scraper.textToNumber('12分')).to.equals(12);
        });

        it('h時間m分 should become h*60+m', () => {
            expect(scraper.textToNumber('1時間2分')).to.equals(62);
        });

        it('hh時間mm分 should become hh*60+m', () => {
            expect(scraper.textToNumber('12時間34分')).to.equals(754);
        });
    });
});
