import React from 'react';
import cx    from 'classnames';
import {Tab, Tabs}  from 'react-mdl/lib/Tabs';
import Grid, {Cell} from 'react-mdl/lib/Grid';
import Spinner        from 'react-mdl/lib/Spinner';

import ArticleCard    from '../ArticleCard/ArticleCard.js';

if (process.env.BROWSER) {
    require('./ArticlesGrid.less');
}

const CATEGORIES = ['ALL', 'ANGULAR', 'REACT', 'REDUX'];

export default class ArticlesGrid extends React.Component {
    static contextTypes = {i18n: React.PropTypes.object};

    static propTypes = {
        articles: React.PropTypes.arrayOf(React.PropTypes.object),
        onItemClick: React.PropTypes.func,
    };

    renderContent = () => {
        const {l} = this.context.i18n;
        const {articles, isLoading, isEmpty, onItemClick} = this.props;

        if (isLoading) {
            return <Spinner className='ArticlesGrid__spinner'/>;
        }

        if (isEmpty) {
            return (
                <div className='ArticlesGrid__empty-state'>
                    {l('There are no articles in this category yet')}
                </div>
            );
        }

        return (
            <Grid className='ArticlesGrid__grid'>
                {articles.map(article =>
                    <Cell
                        key={article.youtubeId}
                        align='top'
                        col={3}
                        tablet={4}
                        phone={12}>
                        <ArticleCard
                            name={article.title}
                        >
                            <div>
                                <img className="ArticlesGrid__youtube"
                                     src={"https://img.youtube.com/vi/" + article.youtubeId + "/0.jpg"}/>
                            </div>

                        </ArticleCard>
                    </Cell>
                )}
            </Grid>
        );
    };

    render() {
        const {
            selectedCategory,
            isLoading,
            onTabChange,
        } = this.props;

        const {l} = this.context.i18n;

        const classes = cx('ArticlesPage', {
            'ArticlesPage--loading': isLoading
        });

        return (
            <div className={classes}>
                <div className='ArticlesGrid__header'>
                    <div className='ArticlesGrid__tab-bar'>
                        <Tabs
                            ripple={true}
                            activeTab={selectedCategory ? CATEGORIES.indexOf(selectedCategory) : 0}
                            className='ArticlesGrid__tabs'
                            onChange={(index) => onTabChange(CATEGORIES[index])}>
                            <Tab>{l('All Tutorials')}</Tab>
                            <Tab>{l('Angular')}</Tab>
                            <Tab>{l('React')}</Tab>
                            <Tab>{l('Redux')}</Tab>
                        </Tabs>
                    </div>
                </div>
                <div style={{ maxWidth: '1200', margin:' 0 auto' }}>
                    <h2 style={{textAlign:'left'}}>All Tutorials</h2>
                    <hr/>
                </div>
                <div className='ArticlesGrid__content'>
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}
