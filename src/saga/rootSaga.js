import { all, spawn, call } from 'redux-saga/effects';
import { dataSagas } from './dataSagas';

export default function* rootSaga() {
  const sagas = [dataSagas];

  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error('[ERROR] Saga error:', e);
          }
        }
      })
    )
  );
}
