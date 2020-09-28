import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finishChecklist } from '../../store/modules/checklist/actions';

import { FinishButton, ButtonText } from './styles';

const Button: React.FC = () => {

  const dispatch = useDispatch();

  const currentState = useSelector(state => state.checklist.items[0]);
  console.log('currentState: ', currentState); 

  const handleFinishChecklist = useCallback(() => {
    if (currentState !== []) {
      console.log('Você precisa finalizar tudo')
    } else {
      dispatch(finishChecklist());
    }
  }, [])

  return (
    <>
      <FinishButton onPress={handleFinishChecklist}>
          <ButtonText>Finalizar</ButtonText>
       </FinishButton>
    </>
  );
}

export default Button;