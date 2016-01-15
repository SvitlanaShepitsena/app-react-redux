import React from 'react';
import Grid, {Cell} from 'react-mdl/lib/Grid';
import {Card, CardTitle, CardActions} from 'react-mdl/lib/Card';

if (process.env.BROWSER) {
    require('./HomeList.less');
}

export default class HomeList extends React.Component {

    render() {
        return (
            <div className="HomeList">
                <Grid className='HomeList__grid'>
                    <Cell
                        col={4}
                        tablet={6}
                        phone={12}>
                        <Card className="HomeList__card" shadow={1}>
                            <CardTitle className='HomeListCard__head'>
                                Et dolorum fuga
                            </CardTitle>
                            <div className='HomeListCard__content'>
                                <p>Et harum quidem rerum facilis est et
                                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                    nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                </p>
                            </div>
                        </Card>
                    </Cell>
                    <Cell
                        col={4}
                        tablet={6}
                        phone={12}>
                        <Card className="HomeList__card" shadow={1}>
                            <CardTitle className='HomeListCard__head'>
                                Et dolorum fuga
                            </CardTitle>
                            <div className='HomeListCard__content'>
                                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint
                                    occaecati cupiditate non provident, similique sunt.
                                </p>
                            </div>
                        </Card>
                    </Cell>
                    <Cell
                        col={4}
                        tablet={6}
                        phone={12}>
                        <Card className="HomeList__card" shadow={1}>
                            <CardTitle className='HomeListCard__head'>
                                Et dolorum fuga
                            </CardTitle>
                            <div className='HomeListCard__content'>
                                <p>Et harum quidem rerum facilis est et
                                    expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
                                    nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas
                                </p>
                            </div>
                        </Card>
                    </Cell>
                </Grid>
            </div>
        );
    }
}
