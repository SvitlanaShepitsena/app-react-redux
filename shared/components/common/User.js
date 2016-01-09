import React from 'react';
export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <img src={this.props.user.picture}/>
                </div>
                <a href="/logout">
                    Logout
                </a>
            </div>
        )
    }

}