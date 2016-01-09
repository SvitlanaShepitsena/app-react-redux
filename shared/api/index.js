'use strict';

import ApiClient      from './ApiClient';
import ArticlesAPI from './Articles';
import UsersAPI       from './Users';

export default function ({apiPrefix} = {}) {
    if (!apiPrefix) {
        throw '[apiPrefix] required';
    }

    const api = new ApiClient({prefix: apiPrefix});

    return {
        articles: new ArticlesAPI({apiClient: api}),
        users: new UsersAPI({apiClient: api})
    };
}
