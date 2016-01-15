'use strict';

import {combineReducers} from 'redux';
import apiResponseFormatter from '../utils/apiResponseFormatter';
import user from './user';
import articles from './article';

const rootReducer = combineReducers({
    articles,
    user
});

export default rootReducer;
