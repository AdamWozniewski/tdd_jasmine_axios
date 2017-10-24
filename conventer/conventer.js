var axios = require('axios');

module.exports.getLatestRates = (callback) => {
    axios.get('http://api.fixer.io/latest')
        .then(response => callback(response.data))
}