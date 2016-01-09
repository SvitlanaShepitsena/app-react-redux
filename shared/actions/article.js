//axios - Promise based HTTP client for the browser and node.js
import request from 'axios';

export const ARTICLES_GET = 'ARTICLES_GET';
export const ARTICLES_GET_REQUEST = 'ARTICLES_GET_REQUEST';
export const ARTICLES_GET_SUCCESS = 'ARTICLES_GET_SUCCESS';
export const ARTICLES_GET_FAILURE = 'ARTICLES_GET_FAILURE';

export const ADD_ARTICLE = 'ADD_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

/*Action Creator functions*/
export function articlesGet() {
    return {
        type: ARTICLES_GET,
        promise: request.get('https://chicagowepapp.firebaseio.com/articles.json')
    };
}

export function addArticle(article) {
    return {
        type: ADD_ARTICLE,
        payload: article
    };
}
export function removeArticle(index) {
    return {
        type: REMOVE_ARTICLE,
        payload: index
    };
}

export function getArticlesIfNeeded() {
    return (dispatch, getState) => {
        if (!getState().articles.length) {
            return dispatch(articlesGet());
        }
    };
}


