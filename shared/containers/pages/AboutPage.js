import React from 'react';
import Helmet from "react-helmet";
import {Card} from 'react-mdl';
import {appType, ogProps} from "../../config.js";

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
            <div style={{ maxWidth: '1200', margin:' 0 auto' }}>
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
                <h1>About vero eos et accusamus et iusto odio dignissimos ducimus</h1>
                <hr/>
                <article>
                    <h2>Eligendi et accusamus</h2>
                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus </p>
                    <h3>Eligendi </h3>
                    <p>
                        At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                        deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non
                        provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et
                        dolorum
                        fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta
                        nobis
                    </p>

                    <h3>Accusamus</h3>
                    <p>
                        Est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis
                        voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                        debitis
                        aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non
                        recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                        maiores alias consequatur aut perferendis doloribus asperiores repellat
                    </p>
                </article>
            </div>
        )
    }

}