import { ActionTypes, IEpiItem } from "./types";

export function fetchEpiItemsFromAPI() {
  return {
    type: ActionTypes.fetchEpiItemsFromAPI,
  }
}

export function fetchEpiItemsFromAPISuccess(items: IEpiItem) {
  return {
    type: ActionTypes.fetchEpiItemsFromAPISuccess,
    payload: {
      items
    }
  }
}

export function setItemAsDone(items: IEpiItem) {
  return {
    type: ActionTypes.setItemAsDone,
    payload: {
      items
    }
  }
}

export function finishChecklist() {
  return {
    type: ActionTypes.finishChecklist,
  }
}

export function fetchEpiItemsFromAPIFailure() {
  return {
    type: ActionTypes.fetchEpiItemsFromAPIFailure,
  }
}


