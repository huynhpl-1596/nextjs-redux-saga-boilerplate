import { all, fork } from 'redux-saga/effects';

import {sagas as examples} from './modules/examples';

export default function* () {
    yield all([
        fork(examples),
    ]);
}
