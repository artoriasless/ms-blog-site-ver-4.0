'use strict';
/* global $ */
const React = require('react');
const reactDom = require('react-dom');

class PaperEditForm extends React.Component {
    constructor() {
        super();

        this.formChangeHandler = this.formChangeHandler.bind(this);
    }

    componentDidUpdate() {
        const $briefInput = reactDom.findDOMNode(this.refs.paper_brief);
        const $contentInput = reactDom.findDOMNode(this.refs.paper_content);
        const cache = this.props.cache || {};
        const {
            brief = '',
            content = '',
        } = cache.paper || {};

        $briefInput.value = brief;
        $contentInput.value = content;
    }

    formChangeHandler(evt) {    // eslint-disable-line
        const title = reactDom.findDOMNode(this.refs.paper_title).value.trim();
        const tag = reactDom.findDOMNode(this.refs.paper_tag).value.trim();
        const subtag = reactDom.findDOMNode(this.refs.paper_subtag).value.trim();
        const brief = reactDom.findDOMNode(this.refs.paper_brief).value;
        const content = reactDom.findDOMNode(this.refs.paper_content).value;

        this.props.updatePaperForm({
            title,
            tag,
            subtag,
            brief,
            content,
        });
    }

    render() {
        const {
            title = '',
            tag = '',
            subtag = '',
        } = this.props.cache.paper || {};

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
                            name="title"
                            onChange={ event => this.formChangeHandler(event) }
                            defaultValue={ title }
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="paper_tag"
                            className="form-control"
                            type="text"
                            placeholder="type paper tag"
                            ref="paper_tag"
                            name="tag"
                            onChange={ event => this.formChangeHandler(event) }
                            defaultValue={ tag }
                        />
                    </div>
                    <div className="form-group">
                        <input
                            id="paper_subtag"
                            className="form-control"
                            type="text"
                            placeholder="type paper subtag(s)(splited by Chinese comma '，' between subtags)"
                            ref="paper_subtag"
                            name="subtag"
                            onChange={ event => this.formChangeHandler(event) }
                            defaultValue={ subtag }
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            id="paper_brief"
                            className="form-control"
                            placeholder="type paper brief(one paragraph is enough)"
                            ref="paper_brief"
                            name="brief"
                            onChange={ event => this.formChangeHandler(event) }
                        ></textarea>
                    </div>
                    <div className="form-group paper-content-container">
                        <textarea
                            id="paper_content"
                            className="form-control"
                            placeholder="type paper content(only support markdown syntax)"
                            ref="paper_content"
                            name="content"
                            onChange={ event => this.formChangeHandler(event) }
                        ></textarea>
                    </div>
                </form>
            </div>
        );
    }
}

module.exports = PaperEditForm;