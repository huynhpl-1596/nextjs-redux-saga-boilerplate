import { combineReducers } from 'redux-immutable';
import {reducers as examples} from './modules/examples';

export default function rootReducer(asyncReducers) {
    return combineReducers({
        examples,
        ...asyncReducers
    });
}
