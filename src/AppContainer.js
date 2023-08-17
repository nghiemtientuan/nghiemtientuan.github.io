import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

// Components
import RoutersList from './RoutersList';

// Actions
import { fetchMasterDataRequest } from './actions';

const AppContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMasterDataRequest());
  }, []);

  return (
    <RoutersList />
  )
};

export default AppContainer;
