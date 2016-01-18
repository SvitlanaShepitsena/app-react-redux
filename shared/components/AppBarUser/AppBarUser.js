'use strict';
import React from 'react';
import Button      from 'react-mdl/lib/Button';

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
            <div className="AppBarUser">
                {!user &&
                <div className='AppBarUser__login'>
                    <Button raised ripple accent onClick={this.props.handleLogin}>
                        Sign up / Sign in
                    </Button>
                </div>
                }
                {user && <ul className="AppBarAppBarUser__menu-info">
                    <li className="AppBarUser__menu-item">
                        {user.picture && <img className="AppBarUser__avatar" src={this.props.user.picture}/>
                        }
                    </li>
                    <li className="AppBarUser__menu-item">
                        <a href="/logout" className="AppBarUser__logout">
                            <i className="mdi mdi-logout mdi-xl"></i>
                        </a>
                    </li>
                </ul>}
            </div>
        )
    }

}