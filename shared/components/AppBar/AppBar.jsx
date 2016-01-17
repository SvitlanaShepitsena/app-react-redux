import React, {Component, PropTypes} from 'react';
import cx                              from 'classnames';
import {Link} from 'react-router';

import LanguageSwitch from '../../containers/LanguageSwitch.jsx';
import LoginDialog    from '../../containers/LoginDialog.jsx';
import {connect} from 'react-redux';
import User from '../AppBarUser/AppBarUser.jsx';

import IconButton from '../../../node_modules/react-mdl/lib/IconButton';

if (process.env.BROWSER) {
    require('./AppBar.less');
}

const LOGO_SRC = './static/logo.svg';

class AppBar extends Component {
    static contextTypes = {i18n: React.PropTypes.object};

    static propTypes = {
        title: PropTypes.string,
        displayRightMenu: PropTypes.bool,
        rightIconName: PropTypes.string,
        fixOnScroll: PropTypes.bool,
        scrollOffset: PropTypes.number,
        onRightIconClick: PropTypes.func
    };

    static defaultProps = {
        title: '',
        fixOnScroll: true,
        displayRightMenu: true,
        rightIconName: '',
        scrollOffset: 0
    };

    state = {
        isFixedToTop: false,
        isLoggingIn: false
    };

    handleScroll = () => {
        const scrollTop = (window.pageYOffset !== undefined)
            ? window.pageYOffset
            : (document.documentElement || document.body.parentNode || document.body).scrollTop;

        const isFixedToTop = scrollTop > this.props.scrollOffset;

        if (isFixedToTop !== this.state.isFixedToTop) {
            this.setState({isFixedToTop});
        }
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

    componentDidMount() {
        if (this.props.fixOnScroll) {
            window.addEventListener('scroll', this.handleScroll);
        }
    }

    componentWillUnmount() {
        if (this.props.fixOnScroll) {
            window.removeEventListener('scroll', this.handleScroll);
        }
    }

    render() {
        const {l} = this.context.i18n;
        const user = this.props.user ? this.props.user.profile : null;
        const {
            title,
            displayRightMenu,
            rightIconName,
            onRightIconClick,
        } = this.props;

        const {isLoggingIn, isFixedToTop} = this.state;

        const rootClassNames = cx('AppBar', this.props.className, {
            'AppBar--fixed': isFixedToTop
        });

        return (
            <div className={rootClassNames}>
                <LoginDialog
                    isOpen={isLoggingIn}
                    onRequestClose={this.handleLoginDialogClose}
                />

                <div className='AppBar__left'>
                    {
                        rightIconName
                            ? <IconButton name={rightIconName} onClick={onRightIconClick}/>
                            : <Link to="/">

                            <img src={LOGO_SRC} className='AppBar__logo'/>
                        </Link>
                    }

                    <span className='AppBar__title'> {title} </span>
                </div>

                {
                    displayRightMenu
                        ? <div className='AppBar__right'>
                        <div >
                            <Link to="/tutorials" className='AppBar__menu-item-nav'>{l('tutorials')}</Link>
                        </div>
                        <div >
                            <Link to="/projects" className='AppBar__menu-item-nav'>{l('projects')}</Link>
                        </div>
                        <LanguageSwitch className='AppBar__lang'/>

                        <div>
                            {user && <User user={user}/>}
                            <div className='AppBar__menu-item'>
                                {!user && <div onClick={this.handleLogin}>{l('Sign up / Sign in')}</div>}
                            </div>
                            <div className='AppBar__menu-item AppBar__menu-item-icon'>
                                {!user &&
                                <i className="mdi mdi-login mdi-xl" onClick={this.handleLogin}></i>
                                }
                            </div>
                        </div>
                    </div>
                        : null
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user

    };
}

export default connect(mapStateToProps)(AppBar);

