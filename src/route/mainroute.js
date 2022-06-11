module.exports = (app, router) => {
    require('./sideroute/homepage-route.js')(app, router);


    //NO UI ROUTES
    require('./noui/invite-route.js')(app, router);
    require('./noui/support-route.js')(app, router);
}