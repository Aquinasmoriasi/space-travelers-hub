import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { fetchRockets, reserveRocket, cancelRocket } from '../../Redux/rockets/rockets';
import Rocket from './Rocket';

const Rockets = () => {
  const dispatch = useDispatch();

  const rockets = useSelector((state) => state.rockets);

  useEffect(() => {
    if (rockets.length === 0) {
      dispatch(fetchRockets());
    }
  }, [dispatch, rockets.length]);

  const onReserve = (e) => {
    dispatch(reserveRocket(e.target.id));
  };

  const onCancel = (e) => {
    dispatch(cancelRocket(e.target.id));
  };

  return (
    <ListGroup className="pb-4 pt-2 ms-4 me-4 border-top rounded-0 border-2">
      {rockets.map((rocket) => (
        <Rocket
          key={rocket.id}
          reserve={onReserve}
          cancel={onCancel}
          rocket={rocket}
        />
      ))}
    </ListGroup>
  );
};

export default Rockets;
