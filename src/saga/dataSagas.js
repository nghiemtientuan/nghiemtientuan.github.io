import { call, put, takeLatest } from 'redux-saga/effects';
import { callApi } from '../utils/apiCaller';
import * as Types from './../constants/ActionTypes';
import { fetchMasterDataRequestSuccess } from '../actions';
import { HTTP_STATUS } from '../constants/httpStatus';

// Sagas
export function* dataSagas() {
  yield takeLatest(Types.FETCH_MASTER_DATA, onFetchMasterData);
}

function* onFetchMasterData() {
  const result = yield call(getMasterDataApi);

  if (result && result.status === HTTP_STATUS.http_200) {
    const {data = {}} = result;
    const {values = []} = data;
    yield put(fetchMasterDataRequestSuccess(values));

    return;
  }

  console.error('[ERROR] onFetchMasterData error')
}

// Call APIs
const getMasterDataApi = () => {
  return callApi()
    .then(response => response)
    .catch(error => error.response);
}
