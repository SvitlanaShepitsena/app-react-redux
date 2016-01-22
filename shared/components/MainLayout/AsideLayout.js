import React, {Component, PropTypes} from 'react';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import {Card, CardTitle, CardText, CardActions} from 'react-mdl/lib/Card';
import Button      from 'react-mdl/lib/Button';
import Icon      from 'react-mdl/lib/Icon';
import Grid, {Cell} from 'react-mdl/lib/Grid';
import {Link} from 'react-router';

if (process.env.BROWSER) {
    require('./AsideLayout.less');
}
export default class AsideLayout extends Component {

    render() {
        return (
            <div className="AsideLayout">
                <Grid>
                    <Cell
                        col={8}
                        phone={12}>
                        {this.props.children}
                    </Cell>
                    <Cell
                        col={4}
                        phone={12}>
                        <aside style={{padding:"0px 8px"}}>
                            <a style={{textAlign:'center', color:'#393939'}}
                               target="_blank"
                               href="https://tleunen.github.io/react-mdl/#/cards">
                                <h4>
                                    React-MDL
                                    Cards
                                </h4>
                            </a>
                            <div style={{textAlign:'center'}}>
                                <Card shadow={0}
                                      className="AsideLayout__card"
                                      style={{height: '256px', background: '#2196F3'}}>
                                    <CardTitle expand style={{alignItems: 'flex-start', color: '#fff'}}>
                                        <h4 style={{marginTop: '0'}}>
                                            Featured event:<br />
                                            May 24, 2016<br />
                                            7-11pm
                                        </h4>
                                    </CardTitle>
                                    <CardActions border
                                                 style={{
                                                 borderColor: 'rgba(255, 255, 255, 0.2)',
                                                 display: 'flex',
                                                 boxSizing: 'border-box',
                                                 alignItems: 'center', color: '#fff'}}>
                                        <Button colored style={{color: '#fff'}}>Add to Calendar</Button>
                                        <div className="mdl-layout-spacer"></div>
                                        <Icon name="event"/>
                                    </CardActions>
                                </Card>
                                <Card shadow={0}
                                      className="AsideLayout__card-image"
                                      style={{ background: 'url(https://www.getmdl.io/assets/demos/image_card.jpg) center / cover' }}>
                                    <CardTitle expand/>
                                    <CardActions
                                        style={{height: '52px', padding: '16px', background: 'rgba(0,0,0,0.2)'}}>
                                    <span
                                        style={{color: '#fff', fontSize: '14px', fontWeight: '500'}}> Image.jpg </span>
                                    </CardActions>
                                </Card>
                                <Card shadow={0} className="AsideLayout__card-image-dog">
                                    <CardTitle expand
                                               style={{color: '#fff',
                                                background: 'url(https://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                                    <CardText>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Aenan convallis.
                                    </CardText>
                                    <CardActions border>
                                        <Button colored>View Updates</Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </aside>
                    </Cell>
                </Grid>

            </div>
        );
    }
}
