/**
 * @class EventModule
 * Functionality taking API information related to events from the backend and creating components.
 */
module.exports = class {

    constructor() {
        this.api = require('./event.api');
    }

    /**
     *
     */
     makeListEventsPanel($container, $detailContainer) {
         const _this = this;

         this.api.getEvents()
            .then(events => {
                const calendarEvents = [];

                let eventClass = 'event-info';

                for (let event of events) {
                    let id              = event.id;
                    let title           = event.description;
                    let date            = event.date;
                    let location        = event.location;

                    let start = moment(date, 'YYYY-MM-DD').unix() * 1000;
                    let end   = start;

                    eventClass === 'event-info' ? eventClass = 'event-success' : eventClass = 'event-info';

                    let newEvent = {
                        id,
                        title,
                        class: eventClass,
                        start,
                        end
                    };

                    calendarEvents.push(newEvent);
                }

                const calendar = $container.calendar({
                    events_source: calendarEvents
                });

                const $calCell = $(' .cal-month-day ');

                $calCell.on('click', () => {
                    setTimeout(() => {
                        const $event = $(' .event-item ');

                        $event.on('click', function () {
                            let id = $(this).attr('data-event-id');

                            _this.makeEventCard(id, $detailContainer);
                        });
                    }, 500);
                });
            });
     }

    /**
     *
     */
     makeEventCard(id, $detailContainer) {
         const $eventDetailWrapper = $(' .event_detail_wrapper ');

         $(' body ').trigger('click');

         $eventDetailWrapper.show();

         $detailContainer.html('');

         this.api.getEvent(id)
            .then(data => {
                const event       = data.event;
                const description = event.description;
                const date        = event.date;
                const location    = event.location;
                const userId      = event.userId;

                const getUser = require('../user/user.api.js').getUser;

                const $eventDetailOptions = $(' .event_detail_options ');

                getUser(userId)
                    .then(data => {
                        let name = data.user.name;
                        let date = moment(data.user.date).format('MM-DD-YYYY');
                        let hours = moment(data.user.date).format('HH:MM A');

                        const eventCardHtml = `
                            <section class="row text-center">
                                <div class="col-md-12">
                                    <h2 class="alert alert-success">${description}</h2>
                                    <h4>Created by ${name} on ${date} at ${hours}</h4>
                                </div>
                            </section>
                            <section class="row text-center">
                                <div class="col-xs-12 col-md-6">
                                    <h2 class="page-header">Location</h2>
                                    <p>${location}</p>
                                </div>
                                <div class="col-xs-12 col-md-6">
                                    <h2 class="page-header">Participants</h2>
                                    <p>(participants)</p>
                                </div>
                            </section>
                        `;

                        $detailContainer.append(eventCardHtml);

                        $eventDetailOptions.show();
                    },
                    err => console.error(err));
            });
     }

    /**
     *
     */
    makeCreateEventPanel($container) {
        const $createEventUserId      = $(' #create_event_user_id ');
        const $createEventDescription = $(' #create_event_description ');
        const $createEventLocation    = $(' #create_event_location ');
        const $createEventDate        = $(' #create_event_date ');
        const $createEventSubmit      = $(' #create_event_submit ');
        const $createEventClear       = $(' #create_event_clear ');

        $createEventSubmit.on('click', () => {
            const data = {
                userId: $createEventUserId.val(),
                description: $createEventDescription.val(),
                location: $createEventLocation.val(),
                date: $createEventDate.val()
            };

            this.api.createEvent(data)
                .then(event => window.location.href = '/event-calendar', err => console.error(err));
        });

    }

};
