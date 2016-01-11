import React from 'react';
import cx    from 'classnames';
import { Tab, Tabs }  from 'react-mdl/lib/Tabs';
import Grid, { Cell } from '../../../../node_modules/react-mdl/lib/Grid';
import Spinner        from '../../../../node_modules/react-mdl/lib/Spinner';

import ArticleCard    from '../../ArticleCard/ArticleCard.jsx';

if (process.env.BROWSER) {
    require('./ArticlesPage.less');
}

const CATEGORIES = ['ALL', 'ANGULAR', 'REACT', 'REDUX'];

export default class ArticlesPage extends React.Component {
    static contextTypes = {i18n: React.PropTypes.object};

    static propTypes = {
        articles: React.PropTypes.arrayOf(React.PropTypes.object),
        onItemClick: React.PropTypes.func,
    };

    renderContent = () => {
        const { articles, isLoading, isEmpty, onItemClick } = this.props;

        if (isLoading) {
            return <Spinner className='ArticlesPage__spinner'/>;
        }

        if (isEmpty) {
            return (
                <div className='ArticlesPage__empty-state'>
                    {l('There are no articles in this category yet')}
                </div>
            );
        }

        return (
            <Grid className='ArticlesPage__list'>
                {articles.map(article =>
                    <Cell
                        key={article.youtubeId}
                        align='top'
                        col={3}
                        tablet={4}
                        phone={12}>
                        <ArticleCard>
                            <p>
                                {article.title}
                            </p>
                            <div>
                                <img className="ArticlesPage__youtube"
                                     src={"http://img.youtube.com/vi/" + article.youtubeId + "/0.jpg"}/>
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

        const { l } = this.context.i18n;

        const classes = cx('ArticlesPage', {
            'ArticlesPage--loading': isLoading
        });

        return (
            <div className={classes}>
                <div className='ArticlesPage__header'>

                    <div className='ArticlesPage__tab-bar'>
                        <Tabs
                            ripple={true}
                            activeTab={selectedCategory ? CATEGORIES.indexOf(selectedCategory) : 0}
                            className='ArticlesPage__tabs'
                            onChange={(index) => onTabChange(CATEGORIES[index])}>
                            <Tab>{l('All Tutorials')}</Tab>
                            <Tab>{l('Angular')}</Tab>
                            <Tab>{l('React')}</Tab>
                            <Tab>{l('Redux')}</Tab>
                        </Tabs>
                    </div>
                </div>

                <div className='ArticlesPage__content'>
                    {this.renderContent()}
                </div>
            </div>
        );
    }
}
