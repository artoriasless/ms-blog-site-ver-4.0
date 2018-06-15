'use strict';

const React = require('react');

const stanLoading = require('/lib/common-stan-loading');

class ActivateContent extends React.Component {
    componentWillMount() {
        stanLoading();
    }

    componentDidMount() {
        const jsonData = {
            uuid: this.props.uuid,
        };

        this.props.activateAccount(jsonData);
    }

    render() {
        return null;
    }
}

module.exports = ActivateContent;
