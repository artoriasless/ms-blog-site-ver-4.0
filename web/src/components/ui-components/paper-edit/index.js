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
        this.showUploadModal = this.showUploadModal.bind(this);
        this.submitPaper = this.submitPaper.bind(this);
    }

    componentWillMount() {
        const paperId = this.props.paperId;
        const getPaper = this.props.getPaper;
        const updatePaperForm = this.props.updatePaperForm;

        if (paperId) {
            getPaper({
                paperId,
            });
        } else {
            updatePaperForm({});
        }
    }

    toggleEditPreview(evt, currentOperateType) {
        const toggleEditPreview = this.props.toggleEditPreview;
        const target = currentOperateType === 'editing' ? 'preview' : 'editing';

        toggleEditPreview(target);
    }

    showUploadModal(evt) {
        $('#uploadModal').modal();
    }

    submitPaper(evt) {
        const cache = this.props.cache || {};
        const paper = cache.paper || {};

        console.info(paper);
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
                <a
                    className="show-upload-modal-link"
                    href="javascript:;"
                    onClick={ event => this.showUploadModal(event) }
                >
                    <i className="fa fa-upload"></i>
                </a>
                <a
                    className="submit-paper-link"
                    href="javascript:;"
                    onClick={ event => this.submitPaper(event) }
                >
                    <i className="fa fa-save"></i>
                </a>
            </div>
        );
    }
}

module.exports = PaperEdit;