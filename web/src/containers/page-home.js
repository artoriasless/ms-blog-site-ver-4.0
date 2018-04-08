'use strict';
/* eslint-disable */
const React = require('react');
const Navbar = require('../components/common-components/navbar');
/* eslint-disable */

class PageHome extends React.Component {
    render() {
        return (
            <div className="page-home">
                <Navbar/>
                <div
                    style={{
                        height: '2500px',
                        padding: '5px',
                        marginTop: 'calc(2.5rem + 1px)',
                    }}>
                    abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn+abcdefghijklmn
                </div>
            </div>
        );
    }
}

module.exports = PageHome;
