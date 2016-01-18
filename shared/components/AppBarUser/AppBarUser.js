'use strict';
import React from 'react';
import {Link} from 'react-router';
import {Navigation} from 'react-mdl';

if (process.env.BROWSER) {
    require('./AppBarUser.less');
}
export default class AppBarUser extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <div className="AppBar__menu-item-icon">
                    {user.picture && <img className="User__avatar" src={this.props.user.picture}/>
                    }
                </div>
                <a href="/logout" className='AppBar__menu-item-icon'>
                    <i className="mdi mdi-logout mdi-xl"></i>
                </a>
            </div>
        )
    }

}