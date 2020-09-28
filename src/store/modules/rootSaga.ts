import { all } from 'redux-saga/effects';

import checklist from './checklist/sagas';

export default function* rootSaga() {
  return yield all([
    checklist,
  ])
}