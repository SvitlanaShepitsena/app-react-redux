import React, { Component, PropTypes } from 'react';
import cx                              from 'classnames';

if (process.env.BROWSER) {
    require('./ArticleCard.less');
}

import { Card, CardTitle, CardActions } from 'react-mdl/lib/Card';
import Button                           from 'react-mdl/lib/Button';
import IconButton                       from 'react-mdl/lib/IconButton';
import Icon                             from 'react-mdl/lib/Icon';

import { sprintf } from '../utils';

export default class ArticleCard extends Component {
    static contextTypes = {i18n: PropTypes.object};
    static propTypes = {
        name: PropTypes.string
    };

    render() {
        const {
            name
            } = this.props;

        return (
            <Card className="ArticleCard" shadow={1}>
                <CardTitle className='ArticleCard__head'>
                    {name}
                </CardTitle>
                <div className='ArticleCard__content'>
                    {this.props.children}
                </div>
            </Card>
        );
    }
}
