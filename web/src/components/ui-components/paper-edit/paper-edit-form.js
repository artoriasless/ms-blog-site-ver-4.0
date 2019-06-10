'use strict';
/* global $ */
const React = require('react');
/* eslint-disable */

class PaperEditForm extends React.Component {
    render() {
        return (
            <div className="form-container col-xs-12 col-md-6">
                <form className="form-content">
                    <div className="form-group">
                        <input
                            id="paper_title"
                            className="form-control"
                            type="text"
                            placeholder="type paper title"
                            ref="paper_title"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="paper_tag"
                            className="form-control"
                            type="text"
                            placeholder="type paper tag"
                            ref="paper_tag"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="paper_subtag"
                            className="form-control"
                            type="text"
                            placeholder="type paper subtag(s)"
                            ref="paper_subtag"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="paper_brief"
                            className="form-control"
                            type="text"
                            placeholder="type paper brief(one paragraph is enough)"
                            ref="paper_brief"
                        ></textarea>
                    </div>
                    <div className="form-group paper-content-container">
                        <textarea
                            id="paper_content"
                            className="form-control"
                            type="text"
                            placeholder="type paper content(only support markdown syntax)"
                            ref="paper_content"
                        ></textarea>
                    </div>
                </form>
            </div>
        );
    }
}

module.exports = PaperEditForm;