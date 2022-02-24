import { combineReducers } from 'redux';
interface Action {
    type: string,
    isLoading: boolean,
}
// loading
const searchReducers = (state = {isLoading: false}, action: Action) => {
    console.log("state", action);
    switch (action.type) {
        case 'IS_LOADING': {
          const { isLoading } = action;
          return {
            ...state,
            isLoading,
          };
        }
        default:
          return state
      }
};
// 搜索
const searchReducersVal = (state = {data: [{},{},{},{}]}, action: any) => {
    switch (action.type) {
        case 'RESULT': {
          const { data } = action;
          return data;
        }
        default:
          return state
      }
};

export const rootReducer = combineReducers({
    searchReducersVal, searchReducers
});
export type RootState = ReturnType<typeof rootReducer>