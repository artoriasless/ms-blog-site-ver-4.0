'use strict';
/* global $ */
/* eslint-disable */
const React = require('react');

const PaperEditForm = require('./paper-edit-form');
const PaperEditPreview = require('./paper-edit-preview');
/* eslint-disable */

class PaperEdit extends React.Component {
    render() {
        const operateType = this.props.operateType || 'editing';

        return (
            <div className="page-section-body row">
                <a className={ `toggle-edit-preview ${operateType}` } href="javascript:;">
                    <i className="fa fa-edit"></i>
                    <i className="fa fa-eye"></i>
                </a>
                <PaperEditForm/>
                <PaperEditPreview/>
            </div>
        );
    }
}

module.exports = PaperEdit;