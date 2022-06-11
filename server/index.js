const express = require('express');
const serverconfig = require('nconf');

const app = express();
app.use(express.static('public'));

app.set('views', './views');
app.set('view engine', 'ejs');

serverconfig.argv().env().file({file: './assets/json/config/config.json'});

require('./server-init')(app, express);
require('./route/mainroute')(app);

app.listen(serverconfig.get('port'), serverconfig.get('domain'), () => {
    console.log(`http://${
        serverconfig.get('domain')
    }:${serverconfig.get('port')} server started on ${
        serverconfig.get('port')
    }`);
});