export enum ActionTypes {
  fetchEpiItemsFromAPI = 'FETCH_EPI_LIST_FROM_API',
  fetchEpiItemsFromAPISuccess = 'FETCH_EPI_LIST_FROM_API_SUCCESS',
  fetchEpiItemsFromAPIFailure = 'FETCH_EPI_LIST_FROM_API_FAILURE',
  setItemAsDone = 'SET_ITEM_AS_DONE',
  finishChecklist = 'FINISH_CHECKLIST',
}

export interface IEpi {
  name: string;
}

export interface IEpiItem {
  EpiItem: IEpi;
  // done: boolean;
}

export interface IChecklistState {
  items: IEpiItem[];
}
