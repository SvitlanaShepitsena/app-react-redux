import React, {Component, PropTypes} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Link} from 'react-router';

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
            <div style={{minHeight: '1200px', position: 'relative'}}>
                <Layout fixedHeader>
                    <AppBar />
                    <Drawer>
                        <Navigation>
                            <Link to="/about" className='MainLayout__drawer-nav-link'>{l('about us')}</Link>
                            <Link to="/tutorials" className='MainLayout__drawer-nav-link'>{l('tutorials')}</Link>
                            <Link to="/projects" className='MainLayout__drawer-nav-link'>{l('projects')}</Link>
                            <Link to="/contacts" className='MainLayout__drawer-nav-link'>{l('contact')}</Link>
                        </Navigation>
                    </Drawer>
                    <WelcomeDialog
                        isOpen={showWelcomeScreen}
                        onDismiss={onWelcomeScreenDismiss}
                    />
                    <div >
                        <div>
                            {this.props.children}
                        </div>
                        <aside>
                            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et
                                expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda
                                est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut
                                rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                                recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
                                voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat</p>
                        </aside>
                    </div>
                    <Footer/>
                </Layout>
            </div>
        );
    }
}
