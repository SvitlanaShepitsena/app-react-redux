'use strict';
import React from 'react';
import Button      from 'react-mdl/lib/Button';

if (process.env.BROWSER) {
    require('./AppBarUser.less');
}
export default class AppBarUser extends React.Component {

    static contextTypes = {i18n: React.PropTypes.object};

    constructor(props) {
        super(props);
    }

    render() {

        const {l} = this.context.i18n;
        const user = this.props.user;
        return (
            <div className="AppBarUser">
                {!user &&
                <div>
                    <div className='User__login'>
                        <Button raised ripple accent onClick={this.props.handleLogin}>
                            Sign up / Sign in
                        </Button>
                    </div>
                    <div className='User__login-mobile'>
                        <i className="mdi mdi-login mdi-xl" onClick={this.props.handleLogin}></i>
                    </div>
                </div>
                }
                {user && <ul className="AppBarUser__menu-info">
                    <li className="User__menu-item">
                        {user.picture && <img className="User__avatar" src={this.props.user.picture}/>
                        }
                    </li>
                    <li className="User__menu-item">
                        <a href="/logout" className="User__logout">
                            <i className="mdi mdi-logout mdi-xl"></i>
                        </a>
                    </li>
                </ul>}
            </div>
        )
    }

}