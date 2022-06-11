const express = require('express');
const serverconfig = require('nconf');
const serverless = require('serverless-http');

const app = express();
app.use(express.static('public'));

const router = express.Router();

app.set('views', './views');
app.set('view engine', 'ejs');

serverconfig.argv().env().file({file: './assets/json/config/config.json'});

require('./server-init')(app, express);
require('./route/mainroute')(app, router);

app.listen(serverconfig.get('port'), serverconfig.get('domain'), () => {
    console.log(`http://${
        serverconfig.get('domain')
    }:${serverconfig.get('port')} server started on ${
        serverconfig.get('port')
    }`);
});

app.use('/.netlify/functions/api', router);
module.exports = app;
module.exports.handler = serverless(app);