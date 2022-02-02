import * as ActionTypes from './ActionTypes';

export const Leaders = (state ={errMess:null,leaders:[],isLoading:true}, action) => {
    switch (action.type) {
        case ActionTypes.LEADERS_LOADING:
            return {...state, errMess:null, leaders:[], isLoading:true}

        case ActionTypes.ADD_LEADERS:
            return {...state, errMess:null, leaders:action.payload, isLoading:false}

        case ActionTypes.LEADERS_FAILED:
            return{...state, errMess:action.payload, leader:[], isLoading:false}

        default:
          return state;
      }
};