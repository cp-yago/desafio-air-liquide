import React, { useEffect } from 'react';

import { EpiItem, EpiName } from './styles';
import { IEpi } from '../../store/modules/checklist/types';
import { useDispatch } from 'react-redux';
import { fetchEpiItemsFromAPI } from '../../store/modules/checklist/actions';

interface ChecklistItemProps {
  epiItem: IEpi;
}

const ChecklistItem: React.FC<ChecklistItemProps> = ({ epiItem }) => {
  const dispatch = useDispatch();
  
  return (
    <>
      <EpiItem key={epiItem.name}>
        <EpiName>Teste</EpiName>
      </EpiItem>
    </>
  );
}

export default ChecklistItem;