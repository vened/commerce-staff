import ActionTypes from '../ActionTypes';

let initialState = {
    title: 'Staff'
};

export default function reducerConfig (state = initialState, action = null) {
    switch (action.type) {
        case ActionTypes.SET_APP_BAR_TITLE:
            return Object.assign({}, state, {
                title: action.title
            });
        default:
            return state;
    }
}
