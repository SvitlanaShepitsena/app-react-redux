'use strict';
import React from 'react';

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
        debugger;
        return (
            <div>
                {!user &&
                <div>
                    <div className='AppBar__menu-item'>
                        <div onClick={this.props.handleLogin}>{l('Sign up / Sign in')}</div>
                    </div>
                    < div className='AppBar__menu-item-icon'>
                        <i className="mdi mdi-login mdi-xl" onClick={this.props.handleLogin}></i>
                    </div>
                </div>
                }
                {user && <ul className="User">
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