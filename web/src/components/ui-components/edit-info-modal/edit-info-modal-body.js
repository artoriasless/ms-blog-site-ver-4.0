'use strict';

const React = require('react');
const reactDom = require('react-dom');

class EditInfoModalBody extends React.Component {
    render() {
        return (
            <div className="modal-body">
                <EditInfoForm updateUserInfoForm={ this.props.updateUserInfoForm }/>
            </div>
        );
    }
}

class EditInfoForm extends React.Component {    //  eslint-disable-line
    constructor() {
        super();
        this.formChangeHandler = this.formChangeHandler.bind(this);
    }

    formChangeHandler(evt) {    //  eslint-disable-line
        const userName = reactDom.findDOMNode(this.refs.editInfo_userName).value.trim();
        const gender = Number($('#editInfoForm').find('[name=gender]:checked').val());

        this.props.updateUserInfoForm({
            userName,
            gender,
        });
    }

    render() {
        return (
            <form id="editInfoForm">
                <div className="form-group">
                    <label
                        htmlFor="editInfo_userName"
                    >user name</label>
                    <input
                        id="editInfo_userName"
                        className="form-control"
                        type="text"
                        placeholder="type your user name"
                        ref="editInfo_userName"
                        name="userName"
                        onChange={ event => this.formChangeHandler(event) }
                    />
                </div>
                <div className="form-group">
                    <label>gender</label>
                    <div className="gender-radio-contaienr">
                        <div className="stan-radio-container">
                            <label className="stan-radio">
                                <i className="fa fa-mars"></i>
                                Male
                                <input
                                    className="stan-radio-input"
                                    type="radio"
                                    name="gender"
                                    value="0"
                                    defaultChecked="true"
                                    onChange={ event => this.formChangeHandler(event) }
                                />
                                <div className="stan-radio-indicator"></div>
                            </label>
                        </div>
                        <div className="stan-radio-container">
                            <label className="stan-radio">
                                <i className="fa fa-venus"></i>
                                Female
                                <input
                                    className="stan-radio-input"
                                    type="radio"
                                    name="gender"
                                    value="1"
                                    onChange={ event => this.formChangeHandler(event) }
                                />
                                <div className="stan-radio-indicator"></div>
                            </label>
                        </div>
                        <div className="stan-radio-container">
                            <label className="stan-radio">
                                <i className="fa fa-transgender"></i>
                                Transgender
                                <input
                                    className="stan-radio-input"
                                    type="radio"
                                    name="gender"
                                    value="2"
                                    onChange={ event => this.formChangeHandler(event) }
                                />
                                <div className="stan-radio-indicator"></div>
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

module.exports = EditInfoModalBody;
