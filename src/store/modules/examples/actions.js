import { all, put, call, takeLatest } from 'redux-saga/effects';
import { createAction } from 'redux-actions';

import types from './types';
import exampleApi from '../../../api/example';

//= ============== ACTIONS ===============//
const loading = createAction(types.LOADING);
const loadSuccessed = createAction(types.LOAD_SUCCESSED);
const loadFail = createAction(types.LOAD_FAILED);

const fetchData = createAction(types.FETCH_DATA);
const fetchDataSuccessed = createAction(types.FETCH_DATA_SUCCESSED);
const fetchDataFail = createAction(types.FETCH_DATA_FAILED);

export const actions = {
    loading,
    loadSuccessed,
    loadFail,
    fetchData,
    fetchDataSuccessed,
    fetchDataFail,
}

//= ============== SAGAS ===============//

export function* sagas() {
    yield all([
        takeLatest(types.FETCH_DATA, handleFetchData)
    ]);
}

function* handleFetchData() {
    const response = yield call(exampleApi.fetch);

    if (response.status === 200) {
        yield put(fetchDataSuccessed(response.data));
        yield put(loadSuccessed());
        console.log(response);
    } else {
        yield put(loadFail());
        console.log('error');
    }
}