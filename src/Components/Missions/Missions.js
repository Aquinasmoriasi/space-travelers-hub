import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import { fetchMissions } from '../../Redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const missionHeadings = ['Missions', 'Description', 'Status', 'Action'];

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {missionHeadings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {missions.map((mission) => (
          <tr key={mission.mission_id}>
            <td>{mission.mission_name}</td>
            <td>{mission.description}</td>
            <td>
              <Badge bg="secondary">NOT A MEMBER</Badge>
            </td>
            <td>
              <Button variant="outline-secondary" type="button">
                Join Mission
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Missions;
