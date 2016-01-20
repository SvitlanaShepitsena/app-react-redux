import React, {Component, PropTypes} from 'react';
import strformat                       from 'strformat';
import escapeHTML                      from 'lodash/string/escape';

import LoginDialog from '../components/LoginDialog/LoginDialog.js';
import {socialAuthURL, emailAuthURL} from '../config';
import {sendEvent} from '../utils/googleAnalytics';

export default class LoginDialogSmartContainer extends Component {
    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onRequestClose: PropTypes.func
    };
    static contextTypes = {i18n: PropTypes.object};

    handleSocialLogin = (type) => {
        const {getLocale} = this.context.i18n;
        console.log();
        const redirectURL = strformat(socialAuthURL, {
            lang: getLocale().toUpperCase(),
            socialType: type
        });
        console.log(redirectURL);
        this.openLink(redirectURL);
        sendEvent('user', 'login', type);
    };

    handleEmailLogin = (type) => {
        const {getLocale} = this.context.i18n;
        const redirectURL = strformat(emailAuthURL, {
            lang: getLocale().toLowerCase(),
            continueRoute: escapeHTML(`/companywall${window.location.pathname}`)
        });
        this.openLink(redirectURL);
        sendEvent('user', 'login', type);
    };

    openLink = (URL) => {
        window.open(URL, '_self');
    };

    render() {
        const {title, isOpen, onRequestClose} = this.props;

        return (
            <LoginDialog
                isOpen={isOpen}
                onSocialLogin={this.handleSocialLogin}
                onRequestClose={onRequestClose}
            />
        );
    }
}

