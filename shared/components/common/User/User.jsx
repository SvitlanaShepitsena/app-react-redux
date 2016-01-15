'use strict';
import React from 'react';

if (process.env.BROWSER) {
    require('./User.less');
}
export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;
        return (
            <div>
                <ul className="User">
                    <li className="User__menu-item">
                        {user.picture && <img className="User__avatar" src={this.props.user.picture}/>
                        }
                    </li>
                    <li className="User__menu-item">
                        <a href="/logout" className="User__logout">
                            <i className="mdi mdi-logout mdi-xl"></i>
                        </a>
                    </li>
                </ul>
            </div>
        )
    }

}