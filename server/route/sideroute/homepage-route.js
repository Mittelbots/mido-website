const nconf = require('nconf');

module.exports = (app) => {
    app.get(nconf.get('routing:homepage'), async (req, res) => {
        res.render('index', {
            invite: nconf.get('routing:invite'),
            support: nconf.get('routing:support'),
        });
    });
}