import React, {Component, PropTypes} from 'react';

import {Link} from 'react-router';
import Icon from './../common/Icon/Icon.js';
import ShareDialog from '../../containers/ShareDialogSmart.js';

if (process.env.BROWSER) {
    require('./Footer.less');
}

export default class Footer extends Component {
    static contextTypes = {i18n: PropTypes.object};

    render() {
        const { l } = this.context.i18n;
        const { links, linkToShare, showShareDialog, onLinkClick, onShareClick, onShareClose } = this.props;

        return (
            <div className='Footer'>
                <ShareDialog
                    title={l('Share this page')}
                    isOpen={showShareDialog}
                    linkToShare={linkToShare}
                    onRequestClose={onShareClose}
                />
                <div className="Footer__content">
                    <div className="Footer__menus-container">
                        <div className="Footer__menu">
                            <h3 className="Footer__menu-header">{l('Keep in touch')}</h3>
                            <ul className="Footer__menu-items">
                                <li>
                                    <a
                                        href={links.facebook}
                                        target='_blank'
                                        onClick={onLinkClick.bind(null, 'facebook')}>
                                        {l('Facebook')}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={links.youtube}
                                        target='_blank'
                                        onClick={onLinkClick.bind(null, 'youtube')}>
                                        {l('Videos on Youtube')}
                                    </a>
                                </li>
                            </ul>
                        </div>


                        <div className="Footer__menu">
                            <h3 className="Footer__menu-header">{l('Do you like our company?')}</h3>
                            <ul className="Footer__menu-items">
                                <li>
                                    <Link to="/about">{l('About us')}</Link>
                                </li>
                                <li>
                                    <a
                                        onClick={onShareClick}>
                                        {l('Share this page')}
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
