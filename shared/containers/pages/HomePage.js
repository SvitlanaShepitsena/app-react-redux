import React from 'react';
import HomeContent from '../../components/HomeContent/HomeContent.js';
import Helmet from "react-helmet";
import {appTitle} from "../../config.js";
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
                <Helmet
                    title={appTitle}
                    meta={[
                    {"property": "og:url", "content": "Helmet url"},
                    {"property": "og:type", "content": "Helmet type"},
                    {"property": "og:title", "content": "Helmet title"},
                    {"property": "og:image", "content": "Helmet image"},
                    {"property": "og:description", "content": "Helmet application"}
                ]}
                />
                <HomeContent></HomeContent>
            </div>
        )
    }

}