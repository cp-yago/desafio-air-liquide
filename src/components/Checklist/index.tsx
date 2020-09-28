import React, { useEffect } from 'react';

import { Counter } from './styles';

import ChecklistItem from '../ChecklistItem';
import { fetchEpiItemsFromAPI } from '../../store/modules/checklist/actions';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { IEpiItem } from '../../store/modules/checklist/types';

const Checklist = () => {

  const dispatch = useDispatch();

  // useEffect(() => {
  //   console.log('UseEffect rodou dentro do componente');
  //   dispatch(fetchEpiItemsFromAPI());
  // }, [dispatch])

  const checklist = useSelector<IState, IEpiItem[]>(state => state.checklist.items);

  return (
    <>
      <Counter>0/5</Counter>
      {/* <ChecklistItem epiItem={}/> */}
    </>
  );

}

export default Checklist;