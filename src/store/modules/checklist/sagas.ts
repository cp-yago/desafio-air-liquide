import { Alert } from 'react-native';
import { all, call, put, takeLatest } from 'redux-saga/effects';
import api from '../../../services/api';

import { fetchEpiItemsFromAPISuccess, fetchEpiItemsFromAPIFailure } from './actions';

import { ActionTypes } from './types';

function* fetchItemsFromAPI() {
  try {
    const fetchItemsResponse = yield call(api.get, '/epi.json?key=c49aa960');

    yield put(fetchEpiItemsFromAPISuccess(fetchItemsResponse.data));

  } catch (err) {
    console.log(err);
    yield put(fetchEpiItemsFromAPIFailure());
  }
}

function* finishChecklist() {
  Alert.alert('Parabéns', 'Você está utilizando todos os equipamentos de segurança necessários');
}

export default all([
  takeLatest(ActionTypes.fetchEpiItemsFromAPI, fetchItemsFromAPI),
  takeLatest(ActionTypes.finishChecklist, finishChecklist)
])