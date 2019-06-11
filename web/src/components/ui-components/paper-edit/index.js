'use strict';
/* global $ */
/* eslint-disable */
const React = require('react');

const PaperEditForm = require('./paper-edit-form');
const PaperEditPreview = require('./paper-edit-preview');
/* eslint-disable */

class PaperEdit extends React.Component {
    constructor() {
        super();

        this.toggleEditPreview = this.toggleEditPreview.bind(this);
    }

    componentWillMount() {
        const paperId = this.props.paperId;
        const getPaper = this.props.getPaper;

        if (paperId) {
            getPaper({
                paperId,
            });
        }
    }

    toggleEditPreview(evt, currentOperateType) {
        const toggleEditPreview = this.props.toggleEditPreview;
        const target = currentOperateType === 'editing' ? 'preview' : 'editing';

        toggleEditPreview(target);
    }

    render() {
        const cache = this.props.cache || {};
        const editPaper = this.props.editPaper || {};
        const operateType = editPaper.operateType || 'editing';

        return (
            <div className={ `page-section-body row ${operateType}` }>
                <a
                    className={ `toggle-edit-preview ${operateType}` }
                    href="javascript:;"
                    onClick={ event => this.toggleEditPreview(event, operateType) }
                >
                    <i className="fa fa-edit"></i>
                    <i className="fa fa-eye"></i>
                </a>
                <PaperEditForm
                    cache={ cache }
                    updatePaperForm={ this.props.updatePaperForm }
                />
                <PaperEditPreview cache={ cache }/>
            </div>
        );
    }
}

module.exports = PaperEdit;