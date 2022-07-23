import {all} from 'redux-saga/effects'
import {countWatcher} from "./CountSaga";
import {fetchUserWatcher} from "./UserSaga";

export function* rootWatcher() {
    yield all([countWatcher(), fetchUserWatcher()])
}