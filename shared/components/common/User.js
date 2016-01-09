import React from 'react';
export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;
        return (

            <div>
                <div>
                    {user.picture ? <img src={this.props.user.picture}/> : <div>{user.name}</div>}
                </div>
                <a href="/logout">
                    Logout
                </a>
            </div>
        )
    }

}