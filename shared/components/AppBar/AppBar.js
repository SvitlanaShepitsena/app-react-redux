import React, {Component, PropTypes} from 'react';
import cx                              from 'classnames';
import {Link} from 'react-router';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

import LanguageSwitch from '../../containers/LanguageSwitchSmart.js';
import LoginDialog    from '../../containers/LoginDialogSmart.js';
import {connect} from 'react-redux';
import AppBarUser from '../AppBarUser/AppBarUser.js';

import IconButton from '../../../node_modules/react-mdl/lib/IconButton';

if (process.env.BROWSER) {
    require('./AppBar.less');
}

const LOGO_SRC = './static/logo.svg';

class AppBar extends Component {
    static contextTypes = {i18n: React.PropTypes.object};

    static propTypes = {
        title: PropTypes.string,
        fixOnScroll: PropTypes.bool,
        scrollOffset: PropTypes.number,
    };

    static defaultProps = {
        title: '',
        fixOnScroll: true,
        scrollOffset: 0
    };

    state = {
        isLoggingIn: false
    };

    handleLogin = () => {
        this.setState({
            isLoggingIn: true
        });
    };

    handleLoginDialogClose = () => {
        this.setState({
            isLoggingIn: false
        });
    };

    renderCompanyLogo = () => {
        return (
            <div>
                <Link to="/">
                    <img src={LOGO_SRC} className='AppBar__logo'/>
                </Link>
                <div className="AppBar__title">
                    Chicago Web App
                </div>
            </div>
        )

    };

    render() {
        const {l} = this.context.i18n;
        const user = this.props.user ? this.props.user.profile : null;

        const {isLoggingIn} = this.state;

        return (
            <Header title={this.renderCompanyLogo()} className="AppBar">
                <LoginDialog
                    isOpen={isLoggingIn}
                    onRequestClose={this.handleLoginDialogClose}
                />
                <Navigation className="AppBar__right">
                    <div>
                        <Link to="/about" className='AppBar__menu-item-nav'>{l('about us')}</Link>
                    </div>
                    <div >
                        <Link to="/tutorials" className='AppBar__menu-item-nav'>{l('tutorials')}</Link>
                    </div>
                    <div >
                        <Link to="/projects" className='AppBar__menu-item-nav'>{l('projects')}</Link>
                    </div>
                    <div >
                        <Link to="/contacts" className='AppBar__menu-item-nav'>{l('contact')}</Link>
                    </div>
                    {/*
                     <LanguageSwitch className='AppBar__lang'/>
                     */}
                </Navigation>
                <AppBarUser user={user} handleLogin={this.handleLogin}/>
            </Header>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user

    };
}

export default connect(mapStateToProps)(AppBar);

