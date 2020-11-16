import { fromJS } from 'immutable';
import { handleActions } from 'redux-actions';

import types from './types';

//= ============== SELECTOR ===============//
const getExample = (state) => console.log(state);

export const selectors = {
    getExample,
}

//= ============== REDUCER ===============//
const initState =  fromJS({
    isLoading: true,
    lists: [],
})

const loading = state => state.set('isLoading', true);
const loadSuccessed = state => state.set('isLoading', true);
const loadFailed = state => state.set('isLoading', true);
const fetchData = (state, action) => state.set('lists', fromJS(action.payload));

export default handleActions({
    [types.LOADING]: loading,
    [types.LOAD_SUCCESSED]: loadSuccessed,
    [types.LOAD_FAILED]: loadFailed,
    [types.FETCH_DATA_SUCCESSED]: fetchData,
}, initState);
