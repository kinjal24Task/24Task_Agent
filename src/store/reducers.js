import { ACTIVATE_AUTH_LAYOUT, ACTIVATE_NON_AUTH_LAYOUT } from './actionTypes';

const initialState={
    topbar:true,
    sidebar:true,
    footer:true
}

const layout = (state=initialState,action) => {
    switch(action.type){
        case ACTIVATE_AUTH_LAYOUT:
            state = {
                ...state,
                ...action.payload
            }
            break;
        case ACTIVATE_NON_AUTH_LAYOUT:
            state = {
                ...state,
                ...action.payload
            }
            break;
        
        default:
            state = {...state};
            break;
    }
    return state;
}

export default layout;