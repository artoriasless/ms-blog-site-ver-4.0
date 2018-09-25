'use strict';

const React = require('react');

class PaperFilterToggler extends React.Component {
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt) { //  eslint-disable-line
        const $container = $(evt.target).closest('.page-section-body');
        const $filterContainer = $container.find('.filter-container');

        if ($container.hasClass('filter-expand')) {
            $container.removeClass('filter-expand');
            $filterContainer.fadeOut();
        } else {
            $container.addClass('filter-expand');
            $filterContainer.fadeIn();
        }
    }

    render() {
        return (
            <a
                id="paperFilterToggler"
                className="paper-filter-toggler"
                href="javascript:;"
            >
                <i
                    onClick={ event => this.clickHandler(event) }
                    className="fa fa-expand show-icon pull-left"
                ></i>
                <i
                    onClick={ event => this.clickHandler(event) }
                    className="fa fa-compress hide-icon pull-right"
                ></i>
            </a>
        );
    }
}

module.exports = PaperFilterToggler;
