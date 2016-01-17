import React from 'react';

export default class ProjectsPage extends React.Component {
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
                    Contact Us
                </h3>
                <hr/>
            </div>
        )
    }
}