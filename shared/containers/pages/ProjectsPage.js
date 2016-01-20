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
            <div style={{ maxWidth: '1200', margin:' 0 auto' }}>
                <h2>
                    Our Projects
                </h2>
                <hr/>
            </div>
        )
    }

}