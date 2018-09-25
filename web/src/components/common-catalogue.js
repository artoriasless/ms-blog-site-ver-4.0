'use strict';

const { connect } = require('react-redux');

const ajaxAction = require('/lib/common-ajax-action');

const UI_catalogue = require('/components/ui-components/catalogue');
const actions = require('/actions');

const getCatalogueAction = actions.getCatalogueAction;

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({   //  eslint-disable-line
    getCatalogue: jsonData => dispatch(ajaxGetCatalogue(jsonData)),
});

const Catalogue = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_catalogue);

function ajaxGetCatalogue(jsonData) {
    return (dispatch => {
        const requestUrl = '/api/catalogue/page';
        const successFunc = function(result) {
            dispatch(getCatalogueAction(result.data));
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

module.exports = Catalogue;
