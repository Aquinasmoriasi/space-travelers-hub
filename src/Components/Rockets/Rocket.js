import React from 'react';
import { ListGroup, Button, Badge } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const Rocket = ({ rocket }) => {
  const {
    id, name, image, description,
  } = rocket;
  return (
    <ListGroup.Item key={id} id={id}>
      <div><img src={image} alt={id} /></div>
      <div>
        <Badge>Reserved</Badge>
        <p>{name}</p>
        <p>{description}</p>
        <Button variant="primary" type="button">
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
};

export default Rocket;
