import React from 'react';

if (process.env.BROWSER) {
    require('./HomePage.less');
}

export default class HomePage extends React.Component {

    render() {

        return (
            <div className='Home'>
                <div className="Home__VideoContainer">
                    <iframe className="Home__Frame"
                            src="https://www.youtube.com/embed/DKUimZvRyqg"
                    ></iframe>
                </div>
            </div>
        );
    }
}
