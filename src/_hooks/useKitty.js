import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import kittyActions from '_actions/kitty.action';
import kittySelector from '_selectors/kitty.selector';

const useKitty = () => {
  const dispatch = useDispatch();

  
  const getKitty = useCallback(
    () => dispatch(kittyActions.getKitty()),
    [dispatch]
  );

  const kitties = useSelector(kittySelector.getKitty);

  return {
    getKitty,
    kitties,
  };
};

export default useKitty;
