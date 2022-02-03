import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = { isLoading: true,
    errMess: null,
    feedbacks:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return {...state,feedbacks:state.feedbacks.concat(feedback)};

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload,feedbacks:[]};

        default:
            return state;
    }
};
