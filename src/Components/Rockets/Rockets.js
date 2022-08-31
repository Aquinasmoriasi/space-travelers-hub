import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { fetchRockets } from '../../Redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchRockets());
  }, [dispatch]);
  const rockets = useSelector((state) => state.rockets);
  return (
    <ListGroup className="pb-4 pt-2 ms-4 me-4 border-top rounded-0 border-2">
      {rockets.map((rocket) => (
        <Rocket key={rocket.id} rocket={rocket} />
      ))}
    </ListGroup>
  );
};

export default Rockets;
