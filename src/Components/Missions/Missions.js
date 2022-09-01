import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Badge } from 'react-bootstrap';
import {
  fetchMissions,
  joinMission,
  leaveMission,
} from '../../Redux/missions/missions';

const Missions = () => {
  const missions = useSelector((state) => state.missions);

  const dispatch = useDispatch();

  useEffect(() => {
    if ((missions || []).length === 0) {
      dispatch(fetchMissions());
    }
  }, []);

  const toggleReservation = (mission) => {
    if (!mission.reserved) {
      dispatch(joinMission(mission.id));
    } else {
      dispatch(leaveMission(mission.id));
    }
  };

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
            <tr key={mission.id}>
              <td className="mission-name col-1">{mission.mission_name}</td>
              <td className="description-col col-5">{mission.description}</td>
              <td className="badge-cell status col-1">
                <Badge
                  className={`${
                    mission.reserved ? 'mission-passive' : 'mission-active'
                  }`}
                  bg={`${mission.reserved ? 'primary' : 'secondary'}`}
                >
                  {mission.reserved && 'Active Member'}
                  {!mission.reserved && 'NOT A MEMBER'}
                </Badge>
              </td>
              <td className="button-cell action col-1">
                <Button
                  key={mission.id}
                  variant={`${
                    mission.reserved ? 'outline-danger' : 'outline-secondary'
                  }`}
                  type="button"
                  onClick={() => toggleReservation(mission)}
                >
                  {mission.reserved && 'Leave Mission'}
                  {!mission.reserved && 'Join Mission'}
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
