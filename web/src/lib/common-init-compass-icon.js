'use strict';
/* global $ */
const $compassIcon = $('#compassIcon');
const $app = $('#app');

function locationCompass() {
    const compassHeight = $compassIcon.height();
    const navbarHeight = $app.find('.page-section-header').height();
    const scrollTopVal = $app.scrollTop();
    const containerHeight = window.innerHeight;
    const contentHeight = $app.prop('scrollHeight') - document.body.scrollHeight;

    if (containerHeight !== contentHeight) {
        const topVal = containerHeight * (scrollTopVal / contentHeight) - navbarHeight - (compassHeight * 1.5);

        $compassIcon
            .css('top', `${topVal}px`)
            .show()
            .stop()
            .fadeIn(() => {
                $compassIcon.fadeOut();
            });
    }
}

function initCompassIcon() {
    locationCompass();

    $app.scroll(locationCompass);
    $(window).resize(locationCompass);
}

module.exports = initCompassIcon;
