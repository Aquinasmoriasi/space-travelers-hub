import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { fetchRockets } from '../../Redux/rockets/rockets';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  return (
    <div />
  );
};

export default Rockets;
