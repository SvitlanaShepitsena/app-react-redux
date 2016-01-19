import {
    ARTICLES_GET_REQUEST,
    ARTICLES_GET_SUCCESS,
    ARTICLES_GET_FAILURE,
    ADD_ARTICLE,
    REMOVE_ARTICLE
} from '../actions/article';

export default function formReducer(state = {isFetching: false, articles: [], error: null}, action) {
    switch (action.type) {
        case ARTICLES_GET_REQUEST:
            return Object.assign(
                {},
                state,
                {
                    isFetching: true
                }
            );
            break;
        case ARTICLES_GET_SUCCESS:
            return Object.assign(
                {},
                state,
                {
                    isFetching: false,
                    error: false,
                    articles: action.articles
                });
            break;
        case ARTICLES_GET_FAILURE:
            return Object.assign(
                {},
                state,
                {
                    error: action.error,
                    isFetching: false
                });
            break;
        case ADD_ARTICLE:
            /* es6 way of creating a new array with destruction*/
            return [action.payload, ...state];
            break;

        case REMOVE_ARTICLE:
            let index = action.payload;
            let before = state.slice(0, index);
            let after = state.slice(index + 1);
            return [...before, ...after];

        default:
            return state;
    }
}