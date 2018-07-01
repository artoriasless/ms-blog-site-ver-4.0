'use strict';
/* eslint-disable */
const React = require('react');

const ModuleClockShow = require('/lib/module-clock-show');
/* eslint-disable */
//  for advertise
// const config = require('/config');
// const ajaxAction = require('/lib/common-ajax-action');

class UserAd extends React.Component {
    //  for advertise
    // componentDidMount() {
    //     const requestUrl = `${config.ossPublic.advertise}/user/script.js`;
    //     const successFunc = function(data) {
    //         eval(data);
    //     };
    //     const failFunc = function() {};
    //     const options = { type: 'get' };

    //     ajaxAction(requestUrl, {}, successFunc, failFunc, options);
    // }

    render() {
        return (
            <div
                id="advertise_user"
                className="col-xs-12 col-md-4 user-ad"
            >
                <ModuleClockShow/>
                {/*
                    <div className="user-ad-content"></div>
                */}
            </div>
        );
    }
}

module.exports = UserAd;
