'use strict';
/* eslint-disable */
const React = require('react');

const Header = require('./upload-modal-header');
const Body = require('./upload-modal-body');
/* eslint-disable */
class UploadModal extends React.Component {
    render() {
        return (
            <div
                id="uploadModal"
                className="common-modal modal fade"
                tabIndex="-1"
                role="dialog"
            >
                <div
                    className="modal-dialog"
                    role="document"
                >
                    <div className="modal-content">
                        <Header/>
                        <Body/>
                    </div>
                </div>
            </div>
        );
    }
}

module.exports = UploadModal;
