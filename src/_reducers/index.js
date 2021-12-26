import { combineReducers } from 'redux';

import kittyReducer from '_reducers/kitty.reducer';

const rootReducer = combineReducers({
    kitty: kittyReducer
});

export default rootReducer;