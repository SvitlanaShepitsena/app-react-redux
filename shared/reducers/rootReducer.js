'use strict';
import { combineReducers } from 'redux';
import apiResponseFormatter from '../utils/apiResponseFormatter';
import user from './user';

import {
    LOAD_ARTICLES_SUCCESS,
    LOAD_ARTICLE_REQUEST,
    LOAD_ARTICLE_SUCCESS,
    LOAD_ARTICLE_FAIL,
    CHANGE_ARTICLES_CATEGORY
} from '../actions/articles';

function articles(state = {articles: [], isLoading: true}, action) {
    switch (action.type) {
        case LOAD_ARTICLES_SUCCESS:
            return {
                articles: action.articles,
                isLoading: false
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    articles,
    user
});

export default rootReducer;
