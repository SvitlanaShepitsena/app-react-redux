import React from 'react';
import Helmet from 'react-helmet';
import ContactForm from '../../components/Contact/ContactForm.js';
import {appType, ogProps} from "../../config.js";

export default class ContactsPage extends React.Component {
    // Constructor
    constructor(props) {
        // Running constructor of Parent (React.Component) for binding this to object.
        // Dynamically assigned global property This is always a component itself.
        super(props);
    }

    render() {
        const contacts = ogProps.contactsPage;
        return (
            <div>
                <Helmet
                    title={contacts.title}
                    meta={[
                    {"property": "og:url", "content": `${contacts.url}`},
                    {"property": "og:type", "content": `${appType}`},
                    {"property": "og:title", "content": `${contacts.title}`},
                    {"property": "og:image", "content": `${contacts.image}`},
                    {"property": "og:description", "content": `${contacts.description}`}
                ]}
                />
                <h2>
                    Contact Us
                </h2>
                <hr/>
                <ContactForm />
                <article>

                    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
                        praesentium
                        voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                        sint
                        occaecati cupiditate non provident, similique sunt in culpa qui officia
                        deserunt
                        mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum
                        facilis
                        est et
                        expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
                        cumque
                        nihil impedit quo minus id quod maxime placeat facere possimus, omnis
                        voluptas
                        assumenda
                        est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis
                        debitis
                        aut
                        rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et
                        molestiae non
                        recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut
                        reiciendis
                        voluptatibus maiores alias consequatur aut perferendis doloribus asperiores
                        repellat</p>
                </article>
            </div>
        )
    }
}