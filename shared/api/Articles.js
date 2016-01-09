import Base from './Base';

export default class ArticlesAPI extends Base {
    list(params) {
        return this.apiClient.get(`https://chicagowepapp.firebaseio.com/articles.json`, {}, params);
    }

    show(id, params) {
        return this.apiClient.get(`companywall/articles/${id}`, {}, params);
    }
}
