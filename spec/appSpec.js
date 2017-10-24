var converter = require('../conventer/conventer');
var helpers = require('../helpers/helper');
var nock = require('nock')

describe('aktualna waluta', () => {
    describe('GET wszystkie waluty', () => {

        beforeEach(() => {
           let ratesResponse = {
               "base": "EUR",
               "date": "2017-10-24",
               "rates": {
                   "AUD": 1.5117,
               }
           };
           nock('http://api.fixer.io')
               .get('/latest')
               .reply(200, ratesResponse)
        });

        it('powinno zwracać obiekt {}', (done) => {
            converter.getLatestRates((result)=>{
                expect(typeof result).toEqual('object');
                done();
            });
        });

        it('obiekt powinien mieć przynajmniej 1 klucz z walutą', (done) => {
            converter.getLatestRates((result)=>{
                let ratesCount = helpers.countKeys(result.rates);
                expect(ratesCount).toBeGreaterThan(0);
                done();
            });
        });
    })
})