import {put, takeEvery, call} from 'redux-saga/effects'
import { FETCH_USERS, setUsers} from "../store/userReducer";



const fetchUsersFromAPI = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=20')

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromAPI)
    const json = yield call(() => new Promise(res => res(data.json())))
    yield put(setUsers(json))
}

export function* fetchUserWatcher() {
    yield takeEvery(FETCH_USERS, fetchUserWorker)
}