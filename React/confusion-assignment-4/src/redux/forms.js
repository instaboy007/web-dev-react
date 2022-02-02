import * as ActionTypes from './ActionTypes';

export const Feedbacks = (state = { isLoading: true,
    errMess: null,
    feedbacks:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACKS:
            return {...state, isLoading: false, errMess: null, feedbacks: action.payload};

        case ActionTypes.ADD_FEEDBACK:
            var feedback = action.payload;
            return {...state,feedbacks:state.feedbacks.concat(feedback)};

        case ActionTypes.FEEDBACKS_LOADING:
            return {...state, isLoading: true, errMess: null, feedbacks: []}

        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading: false, errMess: action.payload,feedbacks:[]};

        default:
            return state;
    }
};
