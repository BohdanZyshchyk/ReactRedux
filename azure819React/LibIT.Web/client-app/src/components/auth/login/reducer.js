import * as types from './types';
import isEmpty from 'lodash/isEmpty';

const intialState = {
    loading: false,
    errors: {},
    user:{
        id:'',
        name: '',
        roles:[]
    },
    isAuthenticated: false
}

export const loginReducer = (state = intialState, action) => {
    console.log("Reducer working", action);
    switch (action.type) {
        case types.LOGIN_STARTED:
            return {
                ...state,
                loading: true,
                errors: {}
            }
            break;
            
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                errors: {}
            }
            break;

        case types.LOGIN_FAILED:
                return {
                    ...state,
                    loading: false,
                    errors: action.errors
                }
            break;
        case types.LOGIN_SET_CURRENT_USER:{
            return{
                ...state,
                user: action.user,
                isAuthenticated: !isEmpty(action.user),
            }
            break;
        }        
        default:
            break;
    }
    return state;
}