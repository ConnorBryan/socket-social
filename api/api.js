'use strict';

module.exports = function (app, models) {
    const userApi        = require('./user.api')(app, models);
    const eventApi       = require('./event.api')(app, models);
    const hobbyApi       = require('./hobby.api')(app, models);
    const participantApi = require('./participant.api')(app, models);
};
