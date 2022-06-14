const nconf = require('nconf');

module.exports = (app) => {
    app.get(nconf.get('routing:support'), async (req, res) => {
        res.redirect(nconf.get('external_links:support'))
    });
}