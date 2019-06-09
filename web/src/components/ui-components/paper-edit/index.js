'use strict';
/* global $ */
/* eslint-disable */
const React = require('react');

const PaperEditForm = require('./paper-edit-form');
const PaperEditPreview = require('./paper-edit-preview');
/* eslint-disable */

class PaperEdit extends React.Component {
    render() {
        return (
            <div className="page-section-body row">
                <PaperEditForm/>
                <PaperEditPreview/>
            </div>
        );
    }
}

module.exports = PaperEdit;