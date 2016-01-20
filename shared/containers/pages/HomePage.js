import React from 'react';
import HomeContent from '../../components/HomeContent/HomeContent.js';
import Helmet from "react-helmet";
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
                <Helmet title="Chicago Web App"/>
                <HomeContent></HomeContent>
            </div>
        )
    }

}