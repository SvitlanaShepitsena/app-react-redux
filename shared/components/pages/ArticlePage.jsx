import React from 'react';
import cx    from 'classnames';

import { Card } from 'react-mdl/lib/Card';
import Grid, { Cell }                   from 'react-mdl/lib/Grid';
import Spinner                          from 'react-mdl/lib/Spinner';

import LoginDialog          from '../../containers/LoginDialog.jsx';

import { sprintf } from '../../utils';

if (process.env.BROWSER) {
    require('./ArticlePage.less');
}

export default class ArticlePage extends React.Component {
    static contextTypes = {i18n: React.PropTypes.object};

    static propTypes = {
        article: React.PropTypes.object,
        onPass: React.PropTypes.func,
        onArticleClick: React.PropTypes.func
    };

    renderContent = () => {
        const {
            article,
            authorArticles,
            isLoading,
            } = this.props;

        const {
            title,
            author,
            } = article;

        if (isLoading) {
            return <Spinner className='ArticlePage__spinner'/>;
        }

        return (
            <div className='ArticlePage__article'>
                <Card className='ArticlePage__paper' shadow={1}>
                    <div className='ArticlePage__details'>
                        <p className='ArticlePage__message'>
                            Here is a article.
                        </p>
                    </div>
                </Card>

                <Grid className='ArticlePage__author-articles-grid'>
                    {
                        authorArticles.map((authorArticle, i) =>
                            <Cell
                                key={authorArticle.id}
                                align='stretch'
                                col={3}
                                phone={2}
                                tablet={3}>
                            </Cell>
                        )
                    }
                </Grid>
            </div>
        );
    }

    render() {
        const {
            article,
            isLoading,
            isLoggingIn,
            onLoginDialogClose,
            onGoBack
            } = this.props;

        const classes = cx('ArticlePage', {
            'ArticlePage--loading': isLoading,
        });

        return (
            <div className={classes}>
                <LoginDialog
                    isOpen={isLoggingIn}
                    onRequestClose={onLoginDialogClose}
                />
                <div className='ArticlePage__content'>
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}
