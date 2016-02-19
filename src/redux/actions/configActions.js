import ActionTypes from '../ActionTypes';

export default function setAppBarTitle (title) {
    return {
        type: ActionTypes.SET_APP_BAR_TITLE,
        title
    };
}
