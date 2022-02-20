import { combineReducers } from 'redux';
interface Action {
    type: string,
    isLoading: boolean
}

const searchReducers = (state = {isLoading: false,}, action: Action) => {
    if (action?.type === 'IS_LOADING') {
        const { isLoading } = action
        console.log("isLoadingAction", isLoading);
        
        return { ...state, isLoading }
    } else {
        return state
    }
};

export default combineReducers({
    searchReducers,
});