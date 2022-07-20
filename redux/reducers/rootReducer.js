import {combineReducers} from "redux"
import userReducer from "./user";
import labsReducer from './labs';
import diestsReducer from './diests';
import remediesReducer from './remedies';

const rootReducer = combineReducers({
    User: userReducer,
    Labs: labsReducer,
    Diets: diestsReducer,
    Remedies: remediesReducer,
})

export default rootReducer;
