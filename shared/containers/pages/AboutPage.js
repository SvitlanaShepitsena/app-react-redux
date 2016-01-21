import React from 'react';
import Helmet from "react-helmet";
import {Card} from 'react-mdl';
import {appType, ogProps} from "../../config.js";
import AboutContent from '../../components/About/AboutContent';

export default class AboutPage extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    render() {
        const about = ogProps.aboutPage;
        return (
            <di>
                <Helmet
                    title={about.title}
                    meta={[
                    {"property": "og:url", "content": `${about.url}`},
                    {"property": "og:type", "content": `${appType}`},
                    {"property": "og:title", "content": `${about.title}`},
                    {"property": "og:image", "content": `${about.image}`},
                    {"property": "og:description", "content": `${about.description}`}
                ]}
                />
                <AboutContent/>
            </di>
        )
    }

}