'use strict';
module.exports = function (app, db) {

    app.get('/test', (req, res) => {
        let data = {
            'success': true,
            'data': 'Hello world'
        }

        res.send(data);
    });

};