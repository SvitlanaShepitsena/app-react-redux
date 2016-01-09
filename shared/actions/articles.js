'use strict';
import api                  from '../apiSingleton';

export const LOAD_ARTICLES_SUCCESS = 'LOAD_ARTICLES_SUCCESS';
export const LOAD_ARTICLES_FAIL = 'LOAD_ARTICLES_FAIL';
export const CHANGE_ARTICLES_CATEGORY = 'CHANGE_ARTICLES_CATEGORY';

export function loadArticles(params = {}, query = {}) {
    return (dispatch) => {
        dispatch({
            type: CHANGE_ARTICLES_CATEGORY,
            category: query.category
        });

        return api.articles.list({
            include: 'users',
            search: query.search || '',
            category: query.category,
            assigneeId: query.assigneeId || ''
        }).then((data) => {
            const tutorials = [];
            for (const p in data) {
                tutorials.push(data[p]);
            }
            dispatch({
                type: LOAD_ARTICLES_SUCCESS,
                articles: tutorials,
                search: query.search,
                category: query.category,
                users: []
            });
        });
    };
}

export const LOAD_ARTICLE_REQUEST = 'LOAD_ARTICLE_REQUEST';
export const LOAD_ARTICLE_SUCCESS = 'LOAD_ARTICLE_SUCCESS';
export const LOAD_ARTICLE_FAIL = 'LOAD_ARTICLE_FAIL';

export function loadArticle(params = {}, query = {}) {
    const assigneeId = query.assigneeId || params.userId || '';

    return dispatch => {
        dispatch({type: LOAD_ARTICLE_REQUEST, articleId: params.id});

        return api.articles.show(params.id, {assigneeId, include: 'users'}).then(response => {
            const userId = response.data.links.owner.id;

            return api.articles.list({userId, assigneeId}).then(response2 => {
                dispatch({
                    type: LOAD_ARTICLE_SUCCESS,
                    article: response.data,
                    author: response.linked.users.find(user => user.id === userId),
                    authorArticles: response2.data.entities
                });
            });
        }).catch(error => {
            dispatch({
                type: LOAD_ARTICLE_FAIL,
                error
            });
        });
    };
}

