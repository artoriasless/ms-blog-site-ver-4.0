'use strict';

const React = require('react');

const config = require('/config');

const ajaxAction = require('/lib/common-ajax-action');
const stanAlert = require('/lib/common-stan-alert');
const stanLoading = require('/lib/common-stan-loading');
const selectContent = require('/lib/common-select-content');

class UploadModalBody extends React.Component {
    constructor() {
        super();

        this.changeHandler = this.changeHandler.bind(this);
        this.initCDNInfoLink = this.initCDNInfoLink.bind(this);
        this.state = {
            history: []
        };
    }

    componentDidMount() {
        $('body').on('click', '.cdn-info-wrap', function(evt) {
            selectContent(evt.target);
        });
    }

    componentDidUpdate() {
        $('#uploadModal .cdn-info-link').each(function() {
            $(this).popover({
                template: ('' +
                    `<div class="popover" role="tooltip">
                        <div class="arrow"></div>
                        <h3 class="popover-header"></h3>
                        <div class="popover-body cdn-info-wrap"></div>
                    </div>`)
            });
        });
    }

    initCDNInfoLink(evt) {
        const $cdnInfoLink = $(evt.target).closest('.cdn-info-link');

        if (!$cdnInfoLink.attr('aria-describedby')) {
            $cdnInfoLink.popover('show');
        }
    }

    changeHandler(evt) {    //  eslint-disable-line
        const _this = this;
        const requestUrl = '/util/upload-file';
        const jsonData = new FormData(document.querySelector('#uploadForm'));
        const successFunc = function(result) {
            stanLoading('hide');
            if (result.success) {
                const history = (_this.state.history || []).slice(0);

                history.push({
                    originalFileName: result.data.originalFileName,
                    fileName: result.data.fileName
                });
                _this.setState({
                    history,
                });
                stanAlert({
                    type: 'success',
                    content: result.message,
                    textAlign: 'center',
                    shownExpires: 0.75,
                });
            } else {
                stanAlert({
                    title: 'Warning!',
                    content: result.message,
                });
            }
        };
        const failFunc = function(err) {
            stanLoading('hide');
            stanAlert({
                title: 'Warning!',
                content: err.toString(),
            });
            console.info(err);  //  eslint-disable-line
        };
        const options = {
            cache: false,
            processData: false,
            contentType: false,
        };

        stanLoading();
        ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
    }

    render() {
        const history = this.state.history || [];

        return (
            <div className="modal-body">
                <div className="upload-form">
                    <form
                        id="uploadForm"
                        method="POST"
                        encType="multipart/form-data"
                    >
                        <label htmlFor="uploadInput" className="upload-icon-container">
                            <i className="fa fa-file"></i>
                        </label>
                        <input
                            className="hidden"
                            name="type"
                            defaultValue="PAPER_MATERIAL"
                            type="text"
                        />
                        <input
                            id="uploadInput"
                            type="file"
                            accept="*"
                            className="hidden"
                            onChange={ event => this.changeHandler(event) }
                            name="file"
                        />
                    </form>
                </div>
                <div className="upload-history">
                    <div className="history-title">
                        Upload History
                    </div>
                    <ul className="history-list">
                        {
                            history.map((item, index) => (
                                <li className="history-item" key={ item.fileName + index }>
                                    <div className="original-name">{ item.originalFileName }</div>
                                    <div
                                        className="cdn-info-link"
                                        data-content={ (config.ossPublic.domain + '/' + item.fileName).replace(/\/+/g, '/') }
                                        onClick={ event => this.initCDNInfoLink(event) }
                                    >
                                        <i className="fa fa-link"></i>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

module.exports = UploadModalBody;