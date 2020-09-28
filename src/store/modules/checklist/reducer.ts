import { Reducer } from 'redux';
import produce from 'immer';
import { IChecklistState, ActionTypes } from './types';

const INITIAL_STATE: IChecklistState = {
  items: [],
}

const checklist: Reducer<IChecklistState> = (state = INITIAL_STATE, action) => {
  return produce(state, draft => {
    switch(action.type) {
      case ActionTypes.fetchEpiItemsFromAPI: {
        break;
      }
      case ActionTypes.fetchEpiItemsFromAPISuccess: {
      
        const items  = action.payload.items;

        draft.items.push( items );
    
        break;
      }
      case ActionTypes.setItemAsDone: {

        // console.log('state: ', state.items);
        // console.log('action payload: ', action.payload.items);
        // console.log('draft: ', draft.items);

        const findIndex = draft.items[0].findIndex(item => 
          item.name === action.payload.items  
        )
        
        const updatedItems = draft.items[0].filter(item => item.name !== action.payload.items);
        draft.items.splice(0, updatedItems.lenght, updatedItems);
        // console.log('draft atualizado: ', teste);

        break;
      }
      case ActionTypes.finishChecklist: {
        console.log('finishChecklist');
        
        break;
      }
      default: {
        return draft;
      }
    }
  });
}

export default checklist;