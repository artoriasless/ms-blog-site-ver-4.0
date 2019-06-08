'use strict';
/* eslint-disable */
const React = require('react');
const { connect } = require('react-redux');

/* eslint-disable */
class UI_PagePaper extends React.Component {
    render() {
        const paperId = this.props.params.paperId || '';
        const pageType = paperId ? 'EDIT' : 'ADD';

        return (
            <div className="page-edit-paper" key={ this.props.current }>
                { pageType === 'ADD' ? 'add new paper' : `update paper, paper id: ${paperId}` }
            </div>
        );
    }
}

const mapState2Props = (state, props) => state.appReducer;  //  eslint-disable-line

const mapDispatch2Props = (dispatch, props) => ({});

const PagePaper = connect(
    mapState2Props,
    mapDispatch2Props
)(UI_PagePaper);

module.exports = PagePaper;
