'use strict';

import React, {Component, PropTypes} from 'react';
import { connect }                   from 'react-redux';
import strformat                     from 'strformat';

import connectDataFetchers from '../../lib/connectDataFetchers.jsx';
import EmbedEvents         from '../../utils/EmbedEventsUtil';
import config              from '../../config';
import { sendEvent }       from '../../utils/googleAnalytics';

import ArticlePage from '../../components/pages/ArticlePage/ArticlePage.jsx';

const embedEvents = new EmbedEvents({
    embedOrigin: config.embedOrigin
});

class ArticlePageContainer extends Component {
    static contextTypes = {i18n: PropTypes.object};

    state = {
        sharingLink: '',
        isLoggingIn: false
    };

    componentWillMount() {
        const { id, userId } = this.props.params;

        if (userId) {
            this.props.history.replaceState(null, `/articles/${id}`);
        }
    }

    handleGoBack = () => {
        this.props.history.pushState(null, `/articles`, {
            embed: this.props.location.query.embed,
            assigneeId: this.props.location.query.assigneeId
        });
    };

    handleShare = (article) => {
        this.setState({
            sharingLink: article.publicLink
        });

        sendEvent('article', 'share', 'click');
    };

    handleLoginClose = () => {
        this.setState({
            isLoggingIn: false
        });
    };

    componentWillReceiveProps(nextProps) {
        if (this.props.params.id !== nextProps.params.id) {
            this.props.dispatch(loadArticle(nextProps.params, nextProps.location.query));
        }
    }

    render() {
        const { article, authorArticles, isLoading } = this.props;
        const { sharingLink, isLoggingIn } = this.state;
        const { embed, assigneeId } = this.props.location.query;

        return (
            <ArticlePage
                article={article}
                authorArticles={authorArticles}
                sharingLink={sharingLink}
                isLoading={isLoading}
                isEmbedded={embed}
                isLoggingIn={isLoggingIn}
                showUserResult={article.isPassed && assigneeId}
                onGoBack={this.handleGoBack}
                onShare={this.handleShare}
                onLoginDialogClose={this.handleLoginClose}
            />
        );
    }
}

function mapStateToProps({ currentArticle: {article, authorArticles, isLoading} }) {
    return {
        article,
        authorArticles,
        isLoading
    };
}

export default connect(mapStateToProps)(
    connectDataFetchers(ArticlePageContainer, [loadArticle])
);
