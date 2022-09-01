import React from 'react';
import { useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';

const Profile = () => {
  const missions = useSelector((state) => state.missions);

  const activeMissions = missions.filter((mission) => mission.reserved);

  return (
    <section className="profile-tables">
      <div className="mission-list">
        <h2>My Missons</h2>
        <Table bordered>
          <tbody>
            {activeMissions.map((mission) => (
              <tr key={mission.id}>
                <td>{mission.mission_name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </section>
  );
};

export default Profile;
