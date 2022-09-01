import React from 'react';
import { ListGroup, Button } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const Rocket = ({ rocket, reserve }) => {
  const {
    id, name, image, description,
  } = rocket;
  return (
    <ListGroup.Item className="d-flex gap-4 border-0" key={id}>
      <div
        className="rocket col-3"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      <div className="col-9`">
        <p className="name">{name}</p>
        <p>
          {description}
        </p>
        <Button id={id} variant="primary" type="button" onClick={reserve}>
          Reserve Rocket
        </Button>
      </div>
    </ListGroup.Item>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  reserve: PropTypes.func.isRequired,
};

export default Rocket;
