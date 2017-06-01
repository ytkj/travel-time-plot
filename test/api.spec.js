const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;
const url = require('url');

describe('api.js', () => {

    const target = require('../lib/api');

    describe('urlTemplate()', () => {
        const result = url.parse(target.urlTemplate('新大塚', '新川崎', { Dhh: 7, Dm1: 0, Dm2: 0}), true);
        const expectation = url.parse('http://www.jorudan.co.jp/norikae/cgi/nori.cgi?rf=top&eok1=&eok2=&pg=0&eki1=%E6%96%B0%E5%A4%A7%E5%A1%9A&Cmap1=&eki2=%E6%96%B0%E5%B7%9D%E5%B4%8E&Dym=201706&Ddd=1&Dhh=7&Dmn1=0&Dmn2=0&Cway=0&Cfp=1&Czu=2&S.x=49&S.y=10&S=%E6%A4%9C%E7%B4%A2&Csg=1', true);

        it('query paramters should be right', () => {
            expect(result.query).to.deep.equals(expectation.query);
        });

        it('hostname should be right', () => {
            expect(result.hostname).to.equals(expectation.hostname);
        });

        it('pathname should be right', () => {
            expect(result.pathname).to.equals(expectation.pathname);
        });

    });

});
