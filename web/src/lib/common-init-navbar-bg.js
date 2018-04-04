'use strict';
/* global $ */
const $app = $('#app');

function changeBG() {
    const navbarHeight = $app.find('.page-section-header').height();
    const scrollTopVal = $app.scrollTop();
    let opacity = scrollTopVal / (navbarHeight * 3);

    opacity = (opacity > 1) ? 1 : opacity;

    if (scrollTopVal > 10) {
        $app.find('.page-section-header').css('background-color', `rgba(240, 240, 240, ${opacity})`);
    } else {
        $app.find('.page-section-header').css('background-color', 'rgba(255, 255, 255, 0)');
    }
}

function initNavbarBG() {
    changeBG();

    $app.scroll(changeBG);
}

module.exports = initNavbarBG;
