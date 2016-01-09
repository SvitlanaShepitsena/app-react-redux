import api                  from '../apiSingleton';
import apiResponseFormatter from '../utils/apiResponseFormatter';
import {LOGIN, LOGIN_SUCCESS, LOGIN_ERROR} from '../constants/constants'

export function login() {
    return (dispatch) => {
        return api.users.show(id).then((response) => {
            const user = apiResponseFormatter.formatAuthorProfileData(response.data);

            dispatch({
                type: LOAD_USER_SUCCESS,
                user
            });
        }).catch(error => {
            dispatch({
                type: LOAD_USER_FAIL,
                error
            });
        });
    };
}
