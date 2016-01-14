import React from 'react';
import Home from '../../components/pages/HomePage/HomePage.jsx';

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
                <Home></Home>
            </div>
        )
    }

}