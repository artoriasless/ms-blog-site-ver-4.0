'use strict';
/* eslint-disable */
const React = require('react');
/* eslint-disable */

class App extends React.Component {
    render() {
        return (
            <div>
                { this.props.children }
            </div>
        );
    }
}

module.exports = App;
