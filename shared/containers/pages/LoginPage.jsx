import React from 'react';
import Login from '../../components/pages/LoginPage/LoginPage.jsx';

export default class LoginPage extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    render() {
        return (
            <div>
                <h3>
                    Login Form
                </h3>

                <Login></Login>

            </div>
        )
    }

}