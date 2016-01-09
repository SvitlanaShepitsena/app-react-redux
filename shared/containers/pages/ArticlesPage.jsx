'use strict';

import React, {Component, PropTypes} from 'react';
import { connect }                   from 'react-redux';

import { loadArticles} from '../../actions/articles';
import connectDataFetchers                    from '../../lib/connectDataFetchers.jsx';
import EmbedEvents                            from '../../utils/EmbedEventsUtil';
import config                                 from '../../config';
import { sendEvent }                          from '../../utils/googleAnalytics';

import ArticlesPage from '../../components/pages/ArticlesPage/ArticlesPage.jsx';

const embedEvents = new EmbedEvents({
    embedOrigin: config.embedOrigin
});

class ArticlesPageContainer extends Component {
    static contextTypes = {i18n: PropTypes.object};

    state = {
        linkToShare: '',
        isSharing: false
    };

    handleTabChange = (category) => {
        this.props.history.pushState(null, this.props.location.pathname, {
            ...this.props.location.query,
            category: category !== 'ALL' ? category : undefined
        });

        sendEvent('articles page', 'category', category);
    };

    componentWillReceiveProps(nextProps) {
        const currentQuery = this.props.location.query;
        const nextQuery = nextProps.location.query;

        const needToReloadData = currentQuery.search !== nextQuery.search
            || currentQuery.category !== nextQuery.category;

        if (needToReloadData) {
            this.props.dispatch(loadArticles(nextProps.params, nextQuery));
        }
    }

    componentWillUnmount() {
        embedEvents.unsubscribe();
    }

    render() {
        return (
            <ArticlesPage
                articles={this.props.articles}
                linkToShare={this.state.linkToShare}
                selectedCategory={this.props.category}
                isSharing={this.state.isSharing}
                isEmbedded={this.props.location.query.embed}
                isLoading={this.props.isLoading}
                isEmpty={this.props.articles.length === 0}
                onTabChange={this.handleTabChange}
            />
        );
    }
}

function mapStateToProps({ articles: {articles, isLoading} }) {
    return {
        articles,
        isLoading
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(ArticlesPageContainer, [loadArticles])
);

