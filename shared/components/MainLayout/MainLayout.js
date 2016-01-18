import React, {Component, PropTypes} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';

import AppBar      from '../AppBar/AppBar.js';
import WelcomeDialog from '../../containers/WelcomeDialogSmart.js';
import Footer        from '../../containers/FooterSmart.js';

if (process.env.BROWSER) {
    require('./MainLayout.less');
}

export default class MainLayout extends Component {
    static contextTypes = {i18n: React.PropTypes.object};

    static propTypes = {
        showWelcomeScreen: PropTypes.bool,
        showFooter: PropTypes.bool,
        footerLinks: PropTypes.object,
        onWelcomeScreenClose: PropTypes.func
    };

    render() {
        const {l} = this.context.i18n;
        const {showWelcomeScreen, showFooter, footerLinks, onWelcomeScreenDismiss} = this.props;

        return (
            <div style={{height: '1200px', position: 'relative'}}>
                <Layout>
                    <div
                        style={{height: '65px'}}>
                        <AppBar
                            title={l('Chicago Web App')}
                            className='ArticlesPage__app-bar'
                            fixOnScroll={false}
                            scrollOffset={65}
                        />
                    </div>
                    <Drawer title="Title">
                        <Navigation>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                            <a href="">Link</a>
                        </Navigation>
                    </Drawer>
                    <WelcomeDialog
                        isOpen={showWelcomeScreen}
                        onDismiss={onWelcomeScreenDismiss}
                    />
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>
            </div>
        );
    }
}
