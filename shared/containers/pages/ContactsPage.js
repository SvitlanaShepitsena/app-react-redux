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
            <div style={{ maxWidth: '1200', margin:' 0 auto' }}>
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

            </div>
        )
    }
}