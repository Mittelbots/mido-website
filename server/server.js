const express = require('express');
const serverconfig = require('nconf');
require('dotenv').config()

const app = express();
app.use(express.static('public'));

const router = express.Router();

app.set('views', './views');
app.set('view engine', 'ejs');

serverconfig.argv().env().file({file: './assets/json/config/config.json'});

require('./server-init')(app, express);
require('./route/mainroute')(app, router);

app.listen(process.env.PORT, process.env.DOMAIN, () => {
    console.log(`http://${
        process.env.DOMAIN
    }:${process.env.PORT} server started on ${
        process.env.PORT
    }`);
});

module.exports = app;