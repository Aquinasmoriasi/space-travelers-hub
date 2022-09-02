import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const Profile = () => {
  const missions = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets);

  const activeMissions = missions.filter((mission) => mission.reserved);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <section className="profile-tables container border-top rounded-0 border-2 d-flex justify-content-between gap-5">
      <div className="mission-list col-6">
        <h2>My Missons</h2>
        {!activeMissions.length && <p>No Active Missions</p>}
        <Table bordered>
          <tbody>
            {activeMissions.map((mission) => (
              <tr key={mission.id}>
                <td className="p-3">{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="rocket-list col-6">
        <h2>My Rockets</h2>
        {!reservedRockets.length && <p>No Rockets Reserved</p>}
        <Table bordered>
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td className="p-3">{rocket.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default Profile;
