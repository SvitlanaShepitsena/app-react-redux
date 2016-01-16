import React from 'react';

if (process.env.BROWSER) {
    require('./LoginPage.less');
}

export default class LoginPage extends React.Component {

    render() {

        return (
            <div>
                <h4 className='LoginDialog__title'>
                    Sign in with your social network account
                </h4>
            </div>
        );
    }
}
