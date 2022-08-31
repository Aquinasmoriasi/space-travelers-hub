import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <section className="table-section pb-4 pt-2 ms-4 me-4 border-top rounded-0 border-2">
      <Table className="mt-2" striped bordered hover>
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
              <td className="text-rigth">{mission.mission_name}</td>
              <td className="description-col">{mission.description}</td>
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
    </section>
  );
};

export default Missions;
