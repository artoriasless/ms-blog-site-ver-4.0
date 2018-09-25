'use strict';
/* eslint-disable */
const React = require('react');
/* eslint-disable */
class Catalogue extends React.Component {
    componentWillMount() {
        const filterType = this.props.filterType;
        const filterParam = this.props.filterParam;
        const getCatalogue = this.props.getCatalogue;

        getCatalogue({
            page: 1,
            filterType,
            filterParam,
        });
    }

    render() {
        return (
            <div id="catalogue" className="catalogue-container col-xs-12 col-md-8 col-lg-9">
                <div className="catalogue-content">
                    目录列表内容
                </div>
            </div>
        );
    }
}

module.exports = Catalogue;
