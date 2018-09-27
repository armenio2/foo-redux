//import { CLICK_UPDATE_VALUE } from '../actions/actionTypes';

const initialState = {
    newValue: 'hakuna matata'
};
const CLICK_UPDATE_VALUE = 'CLICK_UPDATE_VALUE';

export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLICK_UPDATE_VALUE:
            return {
                ...state,
                newValue: action.newValue
            };
        default:
            return state;
    }
};

///////////////////////////////
/*
export const clickReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_UPDATE_VALUE':
            return state.newValue = action.newValue;
        default:
            return state;
    }
}*/