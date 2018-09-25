'use strict';
/* eslint-disable */
const React = require('react');

const ModulePager = require('/lib/module-pager');
/* eslint-disable */
class CataloguePager extends React.Component {
    render() {
        const catalogue = this.props.catalogue || {};
        const pageCount = Math.ceil(catalogue.count / 10);

        if (pageCount > 1) {
            return (
                <div className="catalogue-pager">
                    <hr/>
                    <ModulePager
                        jumpHandler={ pageData => this.pageJumpHandler(pageData) }
                        data={ catalogue }
                    />
                </div>
            )
        }

        return null;
    }
}

module.exports = CataloguePager;
