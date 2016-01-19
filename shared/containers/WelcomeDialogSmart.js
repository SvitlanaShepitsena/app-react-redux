import React, {Component, PropTypes} from 'react';
import strformat from 'strformat';
import WelcomeDialog from '../components/WelcomeDialog/WelcomeDialog.js';
import {welcomeLinks} from '../config';
import {sendEvent} from '../utils/googleAnalytics';

export default class WelcomeDialogSmartContainer extends Component {

    static contextTypes = {i18n: PropTypes.object};

    static propTypes = {
        isOpen: PropTypes.bool.isRequired,
        onDismiss: PropTypes.func.isRequired
    };

    handleLearnMoreAboutCompany = () => {
        window.open(welcomeLinks.aboutCompany, '_blank');
    };

    handleDiscoverTests = () => {
        const {getLocale} = this.context.i18n;
        const linkToOpen = welcomeLinks.discoverTests;

        window.open(linkToOpen, '_blank');
    };

    handleCreateTest = () => {
        const {getLocale} = this.context.i18n;
        const linkToOpen = strformat(welcomeLinks.createTest, {
            lang: getLocale()
        });

        window.open(linkToOpen, '_blank');
    };

    render() {
        const {isOpen, onDismiss, onClose} = this.props;

        return (
            <WelcomeDialog
                isOpen={isOpen}
                onLearnMoreAboutCompany={this.handleLearnMoreAboutCompany}
                onDiscoverTests={this.handleDiscoverTests}
                onCreateTest={this.handleCreateTest}
                onDismiss={onDismiss}
            />
        );
    }
}

