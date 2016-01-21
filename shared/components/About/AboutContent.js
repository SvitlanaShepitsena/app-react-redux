import React from 'react';
import Grid, {Cell} from 'react-mdl/lib/Grid';
import {Card, CardTitle, CardActions} from 'react-mdl/lib/Card';

if (process.env.BROWSER) {
    require('./AboutContent.less');
}

export default class AboutContent extends React.Component {

    render() {
        return (
            <div className="AboutContent">
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
        );
    }
}
