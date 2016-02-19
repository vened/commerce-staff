import ActionTypes from '../ActionTypes';

let initialState = {};

export default function reducerUser (state = initialState, action = null) {
    switch (action.type) {
        case ActionTypes.API_CATEGORIES_GET_LIST:
            return Object.assign({}, state, {
                list: action.data
            });
        default:
            return state;
    }
}
