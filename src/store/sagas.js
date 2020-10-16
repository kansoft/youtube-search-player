import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import * as Actions from './actions';
import { searchFailed, searchSuccess } from './actions';
import api from '../api/api';
import { mapVideos } from '../api/mappers/response';

function* searchRequested({ searchTerm }) {
  try {
    const data = yield call(api.searchVideos, searchTerm);
    yield put(searchSuccess(mapVideos(data)));
  } catch (error) {
    console.log(error);
    yield put(searchFailed(error));
  }
}

function* sagaSearchRequested() {
  yield takeLatest(Actions.SEARCH_REQUESTED, searchRequested);
}

export default function* mainSaga() {
  yield all([fork(sagaSearchRequested)]);
}
