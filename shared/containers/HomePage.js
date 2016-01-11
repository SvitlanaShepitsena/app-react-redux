import React from 'react';
import AppBar      from './../components/AppBar/AppBar.jsx';

export default class HomePage extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    render() {
        return (
            <div>
                <AppBar
                    title={'Chicago Web App'}
                    className='ArticlesPage__app-bar'
                    fixOnScroll={false}
                    scrollOffset={65}
                />
                Home Page Content
            </div>
        )
    }

}