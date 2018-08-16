'use strict';
const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');

const UI_paperFilter = require('/components/ui-components/paper-filter');
const actions = require('/actions');

const getFilterCountAction = actions.getFilterCountAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    getTagFilter: jsonData => dispatch(ajaxGetTagFilter(jsonData)),
    getTimelineFilter: jsonData => dispatch(ajaxGetTimelineFilter(jsonData)),
    getLatestFilter: jsonData => dispatch(ajaxGetLatestFilter(jsonData)),
});

const PaperFilter = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_paperFilter);

function ajaxGetTagFilter(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/paper/filter-count';
        const successFunc = function(result) {
            const filterType = jsonData.filterType;

            dispatch(getFilterCountAction(filterType, result.data));
        };
        const failFunc = function(err) {
            console.info(err);  //  eslint-disable-line
        };
        const options = {
            type: 'get',
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
    });
}

function ajaxGetTimelineFilter(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/paper/filter-count';
        const successFunc = function(result) {
            const filterType = jsonData.filterType;

            dispatch(getFilterCountAction(filterType, result.data));
        };
        const failFunc = function(err) {
            console.info(err);  //  eslint-disable-line
        };
        const options = {
            type: 'get',
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
    });
}

function ajaxGetLatestFilter(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/paper/filter-count';
        const successFunc = function(result) {
            const filterType = jsonData.filterType;

            dispatch(getFilterCountAction(filterType, result.data));
        };
        const failFunc = function(err) {
            console.info(err);  //  eslint-disable-line
        };
        const options = {
            type: 'get',
        };

        return ajaxAction(requestUrl, jsonData, successFunc, failFunc, options);
    });
}

module.exports = PaperFilter;
