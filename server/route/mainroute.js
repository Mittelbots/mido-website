module.exports = (app) => {
    require('./sideroute/homepage-route.js')(app);


    //NO UI ROUTES
    require('./noui/invite-route.js')(app);
    require('./noui/support-route.js')(app);
}