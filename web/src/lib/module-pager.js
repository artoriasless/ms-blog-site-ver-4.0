'use strict';

const React = require('react');

const stanLoading = require('/lib/common-stan-loading');

class Pager extends React.Component {
    componentDidUpdate() {
        setTimeout(() => {
            stanLoading('hide');
        }, 500);
    }

    render() {
        const data = this.props.data || {};
        const current = data.page || 1;
        const dataCount = data.count || 0;
        const pageCount = Math.ceil(dataCount / 10);
        const jumpHandler = this.props.jumpHandler;
        const config = {
            current,
            dataCount,
            pageCount,
            jumpHandler: function(jsonData) {
                stanLoading();
                jumpHandler(jsonData);
            },
        };

        if (pageCount <= 1) {
            return null;
        } else {
            return (
                <div className="pager-container">
                    <div className="pager-tips">
                        { current }/{ pageCount }
                    </div>
                    <nav
                        className="pager-content"
                        aria-label="Page navigation example"
                    >
                        <ul className="pagination">
                            <PageHead config={ config }/>
                            <PagePrev config={ config }/>
                            <PagePrevEllipsis config={ config }/>
                            <PageCurrent config={ config }/>
                            <PageNextEllipsis config={ config }/>
                            <PageNext config={ config }/>
                            <PageFoot config={ config }/>
                        </ul>
                    </nav>
                </div>
            );
        }
    }
}

class PageHead extends React.Component {    //  eslint-disable-line
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt, target) { //  eslint-disable-line
        const jumpHandler = this.props.config.jumpHandler;

        jumpHandler({
            page: target,
        });
    }

    render() {
        const current = this.props.config.current;
        const pageLinkClass = (current === 1) ? 'page-link disable' : 'page-link';

        return (
            <li className="page-item">
                <a
                    className={ pageLinkClass }
                    href="javascript:;"
                    onClick={ event => this.clickHandler(event, 1) }
                >
                    <i className="fa fa-step-backward"></i>
                </a>
            </li>
        );
    }
}

class PagePrev extends React.Component {    //  eslint-disable-line
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt, target) { //  eslint-disable-line
        const jumpHandler = this.props.config.jumpHandler;

        jumpHandler({
            page: target,
        });
    }

    render() {
        const current = this.props.config.current;
        const pageLinkClass = (current === 1) ? 'page-link disable' : 'page-link';

        return (
            <li className="page-item">
                <a
                    className={ pageLinkClass }
                    href="javascript:;"
                    onClick={ event => this.clickHandler(event, current - 1) }
                >
                    <i className="fa fa-angle-left"></i>
                </a>
            </li>
        );
    }
}

class PagePrevEllipsis extends React.Component {    //  eslint-disable-line
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt, target) { //  eslint-disable-line
        const jumpHandler = this.props.config.jumpHandler;

        jumpHandler({
            page: target,
        });
    }

    render() {
        const { current, pageCount } = this.props.config;
        const pageArr = [];

        for (let i = 0; i < 3; i++) {
            pageArr.unshift(
                <li
                    key={ `page_link_${current - i - 1}` }
                    className="page-item"
                >
                    <a
                        className="page-link"
                        href="javascript:;"
                        onClick={ event => this.clickHandler(event, (current - i - 1)) }
                    >{ current - i - 1 }</a>
                </li>
            );
        }

        if (current === 1) {
            //  当前显示为第 1 页内容
            return null;
        } else if (current === 2) {
            //  当前显示为第 2 页内容
            pageArr.shift();
            pageArr.shift();
        } else if (current === 3) {
            //  当前显示为第 3 页
            pageArr.shift();

            if (pageCount > 3) {
                //  总页数大于 3
                pageArr.shift();
                pageArr.unshift(
                    <li className="page-item" key="page_link_ellipsis_prev">
                        <a className="page-link ellipsis" href="javascript:;">
                            <i className="fa fa-ellipsis-h"></i>
                        </a>
                    </li>
                );
            }
        } else {
            pageArr.shift();
            pageArr.unshift(
                <li className="page-item" key="page_link_ellipsis_prev">
                    <a className="page-link ellipsis" href="javascript:;">
                        <i className="fa fa-ellipsis-h"></i>
                    </a>
                </li>
            );
        }

        return pageArr;
    }
}

class PageCurrent extends React.Component { //  eslint-disable-line
    render() {
        return (
            <li className="page-item">
                <a
                    className="page-link active"
                    href="javascript:;"
                >{ this.props.config.current }</a>
            </li>
        );
    }
}

class PageNextEllipsis extends React.Component {    //  eslint-disable-line
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt, target) { //  eslint-disable-line
        const jumpHandler = this.props.config.jumpHandler;

        jumpHandler({
            page: target,
        });
    }

    render() {
        const { current, pageCount } = this.props.config;
        const pageArr = [];

        for (let i = 0; i < 3; i++) {
            pageArr.push(
                <li
                    key={ `page_link_${current + i + 1}` }
                    className="page-item"
                >
                    <a
                        className="page-link"
                        href="javascript:;"
                        onClick={ event => this.clickHandler(event, (current + i + 1)) }
                    >{ current + i + 1 }</a>
                </li>
            );
        }

        if (current === pageCount) {
            //  当前显示为倒数第 1 页内容
            return null;
        } else if (current === (pageCount - 1)) {
            //  当前显示为倒数第 2 页内容
            pageArr.pop();
            pageArr.pop();
        } else if (current === (pageCount - 2)) {
            //  当前显示为倒数第 3 页
            pageArr.pop();

            if (pageCount > 3) {
                //  总页数大于 3
                pageArr.pop();
                pageArr.push(
                    <li className="page-item" key="page_link_ellipsis_next">
                        <a className="page-link ellipsis" href="javascript:;">
                            <i className="fa fa-ellipsis-h"></i>
                        </a>
                    </li>
                );
            }
        } else {
            pageArr.pop();
            pageArr.push(
                <li className="page-item" key="page_link_ellipsis_next">
                    <a className="page-link ellipsis" href="javascript:;">
                        <i className="fa fa-ellipsis-h"></i>
                    </a>
                </li>
            );
        }

        return pageArr;
    }
}

class PageNext extends React.Component {    //  eslint-disable-line
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt, target) { //  eslint-disable-line
        const jumpHandler = this.props.config.jumpHandler;

        jumpHandler({
            page: target,
        });
    }

    render() {
        const { current, pageCount } = this.props.config;
        const pageLinkClass = (current === pageCount) ? 'page-link disable' : 'page-link';

        return (
            <li className="page-item">
                <a
                    className={ pageLinkClass }
                    href="javascript:;"
                    onClick={ event => this.clickHandler(event, current + 1) }
                >
                    <i className="fa fa-angle-right"></i>
                </a>
            </li>
        );
    }
}

class PageFoot extends React.Component {    //  eslint-disable-line
    constructor() {
        super();
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(evt, target) { //  eslint-disable-line
        const jumpHandler = this.props.config.jumpHandler;

        jumpHandler({
            page: target,
        });
    }

    render() {
        const { current, pageCount } = this.props.config;
        const pageLinkClass = (current === pageCount) ? 'page-link disable' : 'page-link';

        return (
            <li className="page-item">
                <a
                    className={ pageLinkClass }
                    href="javascript:;"
                    onClick={ event => this.clickHandler(event, pageCount) }
                >
                    <i className="fa fa-step-forward"></i>
                </a>
            </li>
        );
    }
}

module.exports = Pager;
