import React, { useCallback, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { fetchEpiItemsFromAPI, setItemAsDone } from '../../store/modules/checklist/actions';
import { IState } from '../../store';
import { IEpiItem } from '../../store/modules/checklist/types';

import Button from '../../components/Button';

import { Container, Title, EpiItem, EpiName } from './styles';
import Checklist from '../../components/Checklist';

const Main: React.FC = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchEpiItemsFromAPI());
  }, [dispatch])

  const checklist = useSelector<IState, IEpiItem[]>(state => state.checklist.items);
  console.info('checklist: ', checklist);

  const handleSetItemAsDone = useCallback(( name ) => {
    dispatch(setItemAsDone(name));
  }, [dispatch])

  return (
      <Container>
        <Title>Checklist</Title>
        <Text>{checklist.length-1}/5</Text>

          {checklist[0] && checklist[0].map(item => {
            // console.log('item: ', item.name);
            return (
              <EpiItem key={item.name} onPress={() => handleSetItemAsDone(item.name)}>
                <EpiName>{item.name}</EpiName>
              </EpiItem>
            );
          })}

        <Button />

      </Container>
  );
}

export default Main;